package com.example.bankdetails.repository;

import com.example.bankdetails.model.LoanApplication;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoanApplicationRepository extends MongoRepository<LoanApplication, String> {
}
