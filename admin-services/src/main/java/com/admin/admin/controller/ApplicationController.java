package com.admin.admin.controller;

import com.admin.admin.Service.ApplicationService;
import com.admin.admin.model.ApplicationDetails;
import com.admin.admin.model.LoanDetails;
import com.admin.admin.model.UserDetails;
import com.admin.admin.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/applicationsDetails")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping
    ApplicationDetails addApplication(@RequestBody ApplicationDetails applicationDetails) {
        return applicationService.addApplication(applicationDetails);
    }

    @GetMapping("/email/{emailId}")
    UserDetails getByEmailId(@PathVariable String emailId) {
        return applicationService.getByEmailId(emailId);
    }

    @GetMapping
    List<UserDetails> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    ApplicationDetails getApplicationById(@PathVariable int id) {
        return applicationService.getApplicationById(id);
    }

    @PatchMapping("/email/{emailId}")
    public ResponseEntity<UserDetails> updateByEmailId(@PathVariable String emailId,@RequestParam String newStatus) {
        UserDetails updateUser = applicationService.updateByEmailId(emailId,newStatus);
        return ResponseEntity.ok(updateUser);
    }

    @DeleteMapping("/{id}")
    void DeleteApplication(@PathVariable int id) {
        applicationService.DeleteApplication(id);
    }

    @GetMapping("/user/{emailId}")
    public String getStatus(@PathVariable String emailId, UserDetails userDetails) {
        String applicationStatus = applicationService.getStatus(emailId, userDetails);
        return applicationStatus;
    }

    @GetMapping("/loanAmountDetails/{emailId}")
    public ResponseEntity<?> getLoanAmountDetails(@PathVariable("emailId") String emailId) {
        LoanDetails loanDetails = applicationService.getLoanDetailsByEmailId(emailId);
        if (loanDetails != null) {
            return ResponseEntity.status(HttpStatus.OK).body(loanDetails);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("LOAN AMOUNT NOT FOUND");
    }
}
