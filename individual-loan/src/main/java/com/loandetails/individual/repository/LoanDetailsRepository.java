package com.loandetails.individual.repository;

import com.loandetails.individual.model.LoanDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanDetailsRepository extends JpaRepository<LoanDetails, Integer> {
    List<LoanDetails> findByEmailId(String emailId);

    // Define custom queries if needed
}

