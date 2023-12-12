package com.stackroute.authentcation_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stackroute.authentcation_service.model.User;
import org.springframework.stereotype.Repository;


@Repository
public interface AuthRepository extends JpaRepository<User,Integer> {


    boolean existsByEmail(String email);

    User findByEmail(String email);





}
