package com.admin.admin.Service;

import com.admin.admin.model.ApplicationDetails;
import com.admin.admin.model.LoanDetails;
import com.admin.admin.model.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ApplicationService {
//    ApplicationDetails addApplication(ApplicationDetails applicationDetails);
//   // List<ApplicationDetails> getAllApplications();
//   List<UserDetails> getAllApplications();
//    ApplicationDetails getApplicationById(int id);
//    void DeleteApplication(int id);
//    ApplicationDetails updateApplicationStatus(int id,ApplicationDetails applicationDetails);
//    UserDetails getByEmailId(String emailId);
ApplicationDetails addApplication(ApplicationDetails applicationDetails);
    // List<ApplicationDetails> getAllApplications();
    List<UserDetails> getAllApplications();
    ApplicationDetails getApplicationById(int id);
    void DeleteApplication(int id);
    ApplicationDetails updateApplicationStatus(int id,ApplicationDetails applicationDetails);
    UserDetails getByEmailId(String emailId);

    UserDetails updateByEmailId(String emailId ,String newStatus);


    public String getStatus(String emailId, UserDetails userDetails);


    LoanDetails getLoanDetailsByEmailId(String emailId );
}
