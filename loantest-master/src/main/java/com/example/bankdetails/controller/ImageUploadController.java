//package com.example.bankdetails.controller;
//
//import com.example.bankdetails.model.LoanApplication;
//import com.example.bankdetails.repository.LoanApplicationRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//public class ImageUploadController {
//
//    @Autowired
//    private LoanApplicationRepository loanApplicationRepository;
//
//    @PostMapping("/uploadImage")
//
//    public String uploadImage(@RequestParam("panCard") MultipartFile panCard,
//                              @RequestParam("aadharCard") MultipartFile aadharCard,
//                              @RequestParam("id") String id) {
//        try {
//            byte[] panCardData = panCard.getBytes();
//            byte[] aadharCardData = aadharCard.getBytes();
//
//            // Retrieve the user's LoanApplication by ID
//            LoanApplication application = loanApplicationRepository.findById(id).orElse(null);
//            if (application != null) {
//                // Store PAN Card and Aadhar Card data in the LoanApplication
//                application.setPanCard(panCardData);
//                application.setAadharCard(aadharCardData);
//
//                // Save the updated LoanApplication
//                loanApplicationRepository.save(application);
//
//                return "PAN Card and Aadhar Card uploaded successfully!";
//            } else {
//                return "Loan application not found.";
//            }
//        } catch (Exception e) {
//            return "Image upload failed: " + e.getMessage();
//        }
//    }
//}
//
