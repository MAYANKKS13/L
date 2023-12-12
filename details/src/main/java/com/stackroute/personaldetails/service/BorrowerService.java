package com.stackroute.personaldetails.service;

import com.stackroute.personaldetails.model.BorrowerDetails;
import com.stackroute.personaldetails.repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowerService {
    @Autowired
    private DetailsRepository borrowerDetailsRepository;

    public BorrowerDetails saveBorrowerDetails(BorrowerDetails borrowerDetails) {
        return borrowerDetailsRepository.save(borrowerDetails);
    }

    public List<BorrowerDetails> getAllBorrowerDetails() {
        return borrowerDetailsRepository.findAll();
    }

    public BorrowerDetails getBorrowerDetailsByEmailId(String emailId) {
        return borrowerDetailsRepository.findByEmailId(emailId);
    }

    public BorrowerDetails getBorrowerDetailsByBorrowerId(String borrowerId) {
        return borrowerDetailsRepository.findByBorrowerId(borrowerId);
    }

    public byte[] getImageById(String borrowerId) {
        BorrowerDetails borrowerDetails = borrowerDetailsRepository.findByBorrowerId(borrowerId);
        if (borrowerDetails != null) {
            return borrowerDetails.getProfilePicture();
        }
        return null;
    }
}
