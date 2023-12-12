package com.stackroute.authentcation_service.service;

import com.stackroute.authentcation_service.model.User;

public interface AuthService {


    User add(User user);

    boolean findByEmail(String email);


    User findUserByEmail(String email);



}
