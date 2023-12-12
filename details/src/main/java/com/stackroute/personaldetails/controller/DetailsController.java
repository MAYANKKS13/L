package com.stackroute.personaldetails.controller;

import com.stackroute.personaldetails.exceptions.EmailDoesNotExistsException;
import com.stackroute.personaldetails.exceptions.InvalidRequestException;
import com.stackroute.personaldetails.model.BorrowerDetails;
import com.stackroute.personaldetails.model.LoanDetails;
import com.stackroute.personaldetails.service.DetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController

//@RequestMapping("/api/v1/")

@RequestMapping("/personaldetails")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:4200")
public class DetailsController {

    private final DetailsService detailsService;


    @PostMapping("/details")
    public ResponseEntity<?> saveDetails(@RequestBody BorrowerDetails borrowerDetails) {
        BorrowerDetails details = detailsService.saveUserDetails(borrowerDetails);
        if (details == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Details of the user already exists with email id: " + borrowerDetails.getEmailId());
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(borrowerDetails);
    }

    @GetMapping("/details")
    public ResponseEntity<List<BorrowerDetails>> getAllDetails() {
        List<BorrowerDetails> detailsList = detailsService.getAllUserDetails();

        if (detailsList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(detailsList);
    }

    @GetMapping("/details/foos")
    @ResponseBody
    public ResponseEntity<?> getDetailsByEmailId(@RequestParam(name = "email") String emailId) {
        try {
            BorrowerDetails details = detailsService.getDetailsByEmail(emailId);
            if (details != null) {
                return ResponseEntity.status(HttpStatus.OK).body(details);
            }
            throw new EmailDoesNotExistsException("Email not found with ID: " + emailId);
        } catch (EmailDoesNotExistsException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found with ID: " + emailId);
        }
    }

    @PatchMapping("/{borrowerId}")
    public ResponseEntity<BorrowerDetails> updateBorrowerDetails(
            @PathVariable String borrowerId,
            @RequestBody BorrowerDetails updateRequest
    ) {
        // Check if the request body contains at least one field to update
        if (updateRequest == null ||
                (StringUtils.isEmpty(updateRequest.getFirstName()) &&
                        StringUtils.isEmpty(updateRequest.getLastName()) &&
                        updateRequest.getAddress() == null &&
                        StringUtils.isEmpty(updateRequest.getEmailId()) &&
                        StringUtils.isEmpty(updateRequest.getPhoneNumber()) &&
                        updateRequest.getDateOfBirth() == null &&
                        StringUtils.isEmpty(updateRequest.getGender()) &&
                        StringUtils.isEmpty(updateRequest.getDisplayName()))) {
            throw new InvalidRequestException("No valid fields provided for update.");
        }

        BorrowerDetails updatedBorrower = detailsService.updateBorrowerDetails(borrowerId, updateRequest);
        return ResponseEntity.ok(updatedBorrower);
    }

    @PostMapping("/{borrowerId}/profilepic")
    public ResponseEntity<String> uploadProfilePicture(@PathVariable String borrowerId, @RequestPart("file") MultipartFile file) {
        String responseMessage = detailsService.uploadProfilePicture(borrowerId, file);

        // Determine the appropriate HTTP status code based on the response message
        HttpStatus httpStatus;
        if (responseMessage.contains("successfully")) {
            httpStatus = HttpStatus.OK;
        } else if (responseMessage.contains("could not be uploaded")) {
            httpStatus = HttpStatus.BAD_REQUEST;
        } else {
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return ResponseEntity.status(httpStatus).body(responseMessage);
    }

    @GetMapping("/loandetails/{emailId}")
    public ResponseEntity<?> getLoanDetails(@PathVariable String emailId) {

        LoanDetails loanDetailsObj = detailsService.getLoanDetailsByEmailId(emailId);
        if (loanDetailsObj != null) {
            return ResponseEntity.status(HttpStatus.OK).body(loanDetailsObj);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Loan Details not found with email id: " + emailId);
    }


}

