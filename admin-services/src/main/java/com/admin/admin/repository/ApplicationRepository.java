package com.admin.admin.repository;

import com.admin.admin.model.ApplicationDetails;
import com.admin.admin.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<ApplicationDetails,Integer> {

}

