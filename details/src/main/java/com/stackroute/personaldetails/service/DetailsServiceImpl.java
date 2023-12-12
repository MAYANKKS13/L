package com.stackroute.personaldetails.service;


import com.stackroute.personaldetails.exceptions.BorrowerNotFoundException;
import com.stackroute.personaldetails.model.BorrowerDetails;
import com.stackroute.personaldetails.model.LoanDetails;
import com.stackroute.personaldetails.repository.DetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DetailsServiceImpl implements DetailsService {

    private final DetailsRepository detailsRepository;


    @Override
    public BorrowerDetails saveUserDetails(BorrowerDetails borrowerDetails) {
        boolean exists = detailsRepository.existsByEmailId(borrowerDetails.getEmailId());
        if (!exists) {
            detailsRepository.save(borrowerDetails);
            return borrowerDetails;
        }

        return null;


    }

    @Override
    public BorrowerDetails getDetailsByEmail(String emailId) {
        if(!detailsRepository.existsByEmailId(emailId)){
            return null;
        }
        return detailsRepository.findByEmailId(emailId);
    }

    @Override
    public List<BorrowerDetails> getAllUserDetails() {

        return detailsRepository.findAll();
    }
    @Override
    public BorrowerDetails updateBorrowerDetails(String borrowerId, BorrowerDetails updateRequest) {
        BorrowerDetails borrower = detailsRepository.findById(borrowerId)
                .orElseThrow(() -> new BorrowerNotFoundException("Borrower not found with ID: " + borrowerId));

        if (!StringUtils.isEmpty(updateRequest.getFirstName())) {
            borrower.setFirstName(updateRequest.getFirstName());
        }
        if (!StringUtils.isEmpty(updateRequest.getLastName())) {
            borrower.setLastName(updateRequest.getLastName());
        }
        if (updateRequest.getAddress() != null) {
            borrower.setAddress(updateRequest.getAddress()); // Update the Address field
        }
        if (!StringUtils.isEmpty(updateRequest.getEmailId())) {
            borrower.setEmailId(updateRequest.getEmailId());
        }
        if (!StringUtils.isEmpty(updateRequest.getPhoneNumber())) {
            borrower.setPhoneNumber(updateRequest.getPhoneNumber());
        }
        if (updateRequest.getDateOfBirth() != null) {
            borrower.setDateOfBirth(updateRequest.getDateOfBirth());
        }
        if (!StringUtils.isEmpty(updateRequest.getGender())) {
            borrower.setGender(updateRequest.getGender());
        }
        if (!StringUtils.isEmpty(updateRequest.getDisplayName())) {
            borrower.setDisplayName(updateRequest.getDisplayName());
        }

        return detailsRepository.save(borrower);
    }


    @Override
    public String uploadProfilePicture(String borrowerId, MultipartFile file) {
        try {
            BorrowerDetails borrower = detailsRepository.findById(borrowerId).orElse(null);
            if (borrower != null && !file.isEmpty()) {
                borrower.setProfilePicture(file.getBytes());
                borrower.setProfilePictureFormat(file.getContentType());
                detailsRepository.save(borrower);
                return "Image uploaded successfully.";
            } else {
                return "Image could not be uploaded. Invalid borrower or empty file.";
            }
        } catch (IOException e) {
            return "An error occurred while uploading the image.";
        }
    }



    // NEW METHODS ADDED
    @Override
    public String submitBorrowerDetails(BorrowerDetails borrowerDetails) {
        // Save the combined data to MongoDB
        detailsRepository.save(borrowerDetails);

        return borrowerDetails.getBorrowerId();
    }

    @Override
    public BorrowerDetails getDetailsById(String borrowerId) {
        return detailsRepository.findById(borrowerId)
                .orElseThrow(() -> new BorrowerNotFoundException("Borrower not found with ID: " + borrowerId));
    }

    @Override
    public Optional<BorrowerDetails> findById(String borrowerId) {
        return detailsRepository.findById(borrowerId);
    }


    @Override
    public LoanDetails getLoanDetailsByEmailId(String emailId) {

        LoanDetails loanDetails = new LoanDetails();
        BorrowerDetails borrowerDetails = detailsRepository.findByEmailId(emailId);
        if(borrowerDetails!=null){
            loanDetails.setAmount(borrowerDetails.getLoanDetails().getAmount());
            loanDetails.setTenure(borrowerDetails.getLoanDetails().getTenure());

          //  loanDetails.setCreatedTime();

//            loanDetails.setCreatedTime();


            return loanDetails;
        }
        return null;
    }


}