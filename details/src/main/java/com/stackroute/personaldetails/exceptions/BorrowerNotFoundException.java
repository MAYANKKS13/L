package com.stackroute.personaldetails.exceptions;

public class BorrowerNotFoundException extends RuntimeException{

    public BorrowerNotFoundException(String message){
        super(message);
    }
}
