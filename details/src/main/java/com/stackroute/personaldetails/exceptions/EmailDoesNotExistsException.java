package com.stackroute.personaldetails.exceptions;

public class EmailDoesNotExistsException extends RuntimeException{

    public EmailDoesNotExistsException(String message){
        super(message);
    }
}
