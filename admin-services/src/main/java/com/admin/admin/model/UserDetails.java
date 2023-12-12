package com.admin.admin.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

//import org.springframework.data.mongodb.core.mapping.Document;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
//@Document(collection = "borrowerDetails")
public class UserDetails {

    private String borrowerId;

    private String firstName;

    private String lastName;

    private Address address;

    private String phoneNumber;

    private String emailId;

    private LocalDate dateOfBirth;

    private String gender;

    private String displayName;

    private LoanDetails loanDetails;

    private String status = "pending";
//    private String loanId;

    //  For Uploading Image
//        private byte[] profilePicture; // Field for storing the profile picture
//        private String profilePictureFormat;


}
