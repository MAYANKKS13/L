package com.stackroute.personaldetails.model;


import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LoanDetails {

    private long amount;

    private int tenure;

    private LocalDate createdTime = LocalDate.now();

//    public void setCreatedTime() {
//        this.createdTime = LocalDate.now();
//    }
}