package com.example.bankdetails.service;

import com.example.bankdetails.model.LoanApplication;
import com.example.bankdetails.repository.LoanApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LoanApplicationService {
    private final LoanApplicationRepository repository;

    @Autowired
    public LoanApplicationService(LoanApplicationRepository repository) {
        this.repository = repository;
    }

    public LoanApplication saveLoanApplication(LoanApplication loanApplication) {
        return repository.save(loanApplication);
    }

    public List<LoanApplication> getAllLoanApplications() {
        return repository.findAll();
    }

    public LoanApplication getLoanApplicationById(String id) {
        return repository.findById(id).orElse(null);
    }
}
