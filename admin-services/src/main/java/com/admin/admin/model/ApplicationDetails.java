package com.admin.admin.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
@Table(name="application_details")
public class ApplicationDetails {
//    @Id
//    private int applicationId;
//    @Column(name = "applicantName")
//    private String applicantName;
//    @JsonFormat(pattern = "dd-MM-yyyy")
//    @Column(name="applicationDate")
//    private LocalDate applicationDate;
//
//    @Column(name = "Status")
//    private String status="pending";
//
        @Id
        private int applicationId;

        @Column(name = "applicantName")
        private String applicantName;

        @JsonFormat(pattern = "dd-MM-yyyy")
        @Column(name="applicationDate")
        private LocalDate applicationDate;

        @Column(name = "Status")
        private String status;



    }
