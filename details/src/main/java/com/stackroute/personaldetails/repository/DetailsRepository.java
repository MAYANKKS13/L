package com.stackroute.personaldetails.repository;

import com.stackroute.personaldetails.model.BorrowerDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailsRepository extends MongoRepository<BorrowerDetails,String> {

    BorrowerDetails findByEmailId(String emailId);

    boolean existsByEmailId(String emailId);

    BorrowerDetails findByBorrowerId(String borrowerId);
}
