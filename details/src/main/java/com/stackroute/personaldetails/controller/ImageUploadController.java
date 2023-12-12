package com.stackroute.personaldetails.controller;

import com.stackroute.personaldetails.model.BorrowerDetails;
import com.stackroute.personaldetails.model.UploadResponse;
import com.stackroute.personaldetails.repository.DetailsRepository;
//import com.stackroute.personaldetails.util.DetailsConverter;
import com.stackroute.personaldetails.service.BorrowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2")
public class ImageUploadController {
    @Autowired
    private DetailsRepository detailsRepository; // Create this repository

    @Autowired
    private BorrowerService borrowerService; // Create this service

    @PostMapping("/create")
    public ResponseEntity<BorrowerDetails> createBorrowerWithImage(
            @RequestPart("image") MultipartFile image,
            @RequestPart("borrowerDetails") BorrowerDetails borrowerDetails) {
        try {
            // Set the profile picture from the uploaded image
            borrowerDetails.setProfilePicture(image.getBytes());

            // Save the borrower details along with the image
            BorrowerDetails savedBorrower = borrowerService.saveBorrowerDetails(borrowerDetails);
            return ResponseEntity.ok(savedBorrower);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/image/{borrowerId}")
    public ResponseEntity<byte[]> getImageById(@PathVariable String borrowerId) {
        byte[] image = borrowerService.getImageById(borrowerId);
        if (image != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // Adjust content type based on your image format
            return new ResponseEntity<>(image, headers, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            // Save the image to MongoDB
            BorrowerDetails borrowerDetails = new BorrowerDetails();
            borrowerDetails.setProfilePicture(file.getBytes());
            borrowerDetails.setProfilePictureFormat(file.getContentType());
            detailsRepository.save(borrowerDetails);

            return ResponseEntity.ok(new UploadResponse(borrowerDetails.getBorrowerId()));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable String id) {
        Optional<BorrowerDetails> borrowerDetails = detailsRepository.findById(id);
        if (borrowerDetails.isPresent()) {
            byte[] imageBytes = borrowerDetails.get().getProfilePicture();
            return ResponseEntity.ok().contentType(MediaType.parseMediaType(borrowerDetails.get().getProfilePictureFormat())).body(imageBytes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
