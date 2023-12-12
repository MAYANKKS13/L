package com.loandetails.individual.controller;

import com.loandetails.individual.dto.PaymentMonthsDto;
import com.loandetails.individual.model.LoanDetails;
import com.loandetails.individual.service.LoanDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/loanApi")
public class LoanDetailsController {

    private final LoanDetailsService loanDetailsService;
    private static final java.util.logging.Logger log = java.util.logging.Logger.getLogger(LoanDetailsController.class.getName());

    @Autowired
    public LoanDetailsController(LoanDetailsService accountService) {
        this.loanDetailsService = accountService;
    }

    @PostMapping("/createentry")
    public ResponseEntity<LoanDetails> saveEmiEntry(@RequestBody LoanDetails emiEntry) {
        log.info("App is started!");
        LoanDetails createdBlog = loanDetailsService.saveEntry(emiEntry);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBlog);
    }


    @GetMapping("/create")
    public ResponseEntity<LoanDetails> UpdateToPaid(@RequestBody LoanDetails emiEntry) {
        log.info("App is started!");
        LoanDetails createdBlog = loanDetailsService.saveEntry(emiEntry);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBlog);
    }



    @GetMapping(value = "/payment_emi_months/{emailId}/{loanCreationDate}")
    public ResponseEntity<PaymentMonthsDto> getAllPendingMonthsData(@PathVariable String emailId, @PathVariable String loanCreationDate) {

        log.info("Getting Payment months");
        log.info("loan");
//        List<String> listOfExpectedMonths = loanDetailsService.calculateMonthsAndYearsBetween(loanCreationDate);

        List<String> listOfExpectedMonths = loanDetailsService.calculateMonthsAndYearsBetween("31-06-2023");
        log.info("not paid months");
        log.info(listOfExpectedMonths.toString());

        List<LoanDetails> dataEntries = loanDetailsService.getDataByEmailId(emailId);
//        if (dataEntries.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        }
        log.info("paid months");
        List<YearMonth> expectedMonths = listOfExpectedMonths.stream()
                .map(monthYear -> YearMonth.parse(monthYear, DateTimeFormatter.ofPattern("dd MMMM, yyyy")))
                .toList();


        List<YearMonth> paidMonths = dataEntries.stream()
                .map(blog -> YearMonth.from(LocalDate.parse(blog.getMonthEmiDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy"))))
                .toList();

        List<LocalDate> paymentDates = dataEntries.stream()
                .map(loanDetails -> LocalDate.parse(loanDetails.getPaymentDoneDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy")))
                .toList();

        List<LocalDate> monthEmiDates = dataEntries.stream()
                .map(loanDetails -> LocalDate.parse(loanDetails.getMonthEmiDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy")))
                .collect(Collectors.toList());

        List<List<LocalDate>> combinedList = IntStream.range(0, Math.min(paymentDates.size(), monthEmiDates.size()))
                .mapToObj(i -> Arrays.asList(paymentDates.get(i), monthEmiDates.get(i)))
                .collect(Collectors.toList());

        log.info(paymentDates.toString());


        List<YearMonth> missingMonths = new ArrayList<>(expectedMonths);
        missingMonths.removeAll(paidMonths);


        PaymentMonthsDto paymentStatus = new PaymentMonthsDto(combinedList, missingMonths);

        log.info(combinedList.toString());

        return new ResponseEntity<>(paymentStatus, HttpStatus.OK);

    }




    }
