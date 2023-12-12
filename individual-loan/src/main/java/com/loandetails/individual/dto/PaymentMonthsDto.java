package com.loandetails.individual.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PaymentMonthsDto {
    private List<List<LocalDate>> paidMonths;
    private List<YearMonth> missingMonths;

    public PaymentMonthsDto(List<List<LocalDate>> paidMonths, List<YearMonth> missingMonths) {
        this.paidMonths = paidMonths;
        this.missingMonths = missingMonths;
    }

    // Getter and setter methods for paidMonths and missingMonths
}