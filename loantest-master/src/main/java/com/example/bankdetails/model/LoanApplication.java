package com.example.bankdetails.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "loanApplications")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor

public class LoanApplication {

    @Id
    private String id;
    private String bankname;
    private String accountnumber;
    private String ifsccode;
    private String ownername;

    private String aadharcard;

    private String pancard;

    private String processingfee= "unpaid" ;


//    private byte[] panCard;
//    private byte[] aadharCard;
//
//    public void setPanCard(byte[] panCard) {
//        this.panCard = panCard;
//    }
//
//    public byte[] getPanCard() {
//        return panCard;
//    }
//
//    public void setAadharCard(byte[] aadharCard) {
//        this.aadharCard = aadharCard;
//    }
//
//    public byte[] getAadharCard() {
//        return aadharCard;
//    }
}