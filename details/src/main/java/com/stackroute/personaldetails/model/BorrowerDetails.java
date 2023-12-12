package com.stackroute.personaldetails.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "borrowerDetailsNew")
public class BorrowerDetails {

    @Id
    private String borrowerId;

    private String firstName;

    private String lastName;

    private Address address;

    private String emailId;

    private String phoneNumber;

    private LocalDate dateOfBirth;

    private String gender;

    private String displayName;

    private LoanDetails loanDetails;

//  For Uploading Image
    private byte[] profilePicture; // Field for storing the profile picture
    private String profilePictureFormat;



}
