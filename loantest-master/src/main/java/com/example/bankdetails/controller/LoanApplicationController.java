package com.example.bankdetails.controller;

import com.example.bankdetails.model.LoanApplication;
import com.example.bankdetails.service.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @RestController
    @RequestMapping("/loanApplications")
   @CrossOrigin(origins = "http://localhost:4200")

    public class LoanApplicationController {
        private final LoanApplicationService service;

        @Autowired
        public LoanApplicationController(LoanApplicationService service) {
            this.service = service;
        }

        @PostMapping
        public LoanApplication applyForLoan(@RequestBody LoanApplication loanApplication) {
            return service.saveLoanApplication(loanApplication);
        }

        @GetMapping
        public List<LoanApplication> getAllLoanApplications() {
            return service.getAllLoanApplications();
        }

        @GetMapping("/{id}")
        public LoanApplication getLoanApplicationById(@PathVariable String id) {
            return service.getLoanApplicationById(id);
        }

    }


