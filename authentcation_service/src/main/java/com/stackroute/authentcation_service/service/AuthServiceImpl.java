package com.stackroute.authentcation_service.service;

import com.stackroute.authentcation_service.model.User;
import com.stackroute.authentcation_service.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor public class AuthServiceImpl implements AuthService {


     @Autowired
     private final AuthRepository repository;


    @Override
    public User add(User user) {
        return repository.save(user);
    }

    @Override
    public boolean findByEmail(String email) {

         return repository.existsByEmail(email);

    }

    @Override
    public User findUserByEmail(String email) {

           return repository.findByEmail(email);


    }

























}
