package com.stackroute.personaldetails.service;

import com.stackroute.personaldetails.model.BorrowerDetails;
import com.stackroute.personaldetails.model.LoanDetails;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface DetailsService {

    BorrowerDetails saveUserDetails(BorrowerDetails borrowerDetails);

    BorrowerDetails getDetailsByEmail(String emailId);

    List<BorrowerDetails> getAllUserDetails();

    BorrowerDetails updateBorrowerDetails(String borrowerId, BorrowerDetails updateRequest);

    String submitBorrowerDetails(BorrowerDetails borrowerDetailsDTO);
    String uploadProfilePicture(String borrowerId, MultipartFile file);

    BorrowerDetails getDetailsById(String borrowerId);

    Optional<BorrowerDetails> findById(String borrowerId);

    LoanDetails getLoanDetailsByEmailId(String emailId);
}