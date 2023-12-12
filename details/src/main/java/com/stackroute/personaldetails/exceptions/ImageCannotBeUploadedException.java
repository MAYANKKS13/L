package com.stackroute.personaldetails.exceptions;

import java.io.IOException;

public class ImageCannotBeUploadedException extends IOException {

    public ImageCannotBeUploadedException(String message){
        super(message);
    }
}
