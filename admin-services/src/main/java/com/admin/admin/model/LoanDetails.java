package com.admin.admin.model;

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

    private LocalDate createdTime=LocalDate.now();



}
