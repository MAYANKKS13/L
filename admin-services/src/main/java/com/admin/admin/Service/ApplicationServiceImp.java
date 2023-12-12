package com.admin.admin.Service;

import com.admin.admin.model.ApplicationDetails;
import com.admin.admin.model.LoanDetails;
import com.admin.admin.model.UserDetails;
import com.admin.admin.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpMethod;


import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImp implements ApplicationService {

    @Autowired
    private RestTemplate restTemplate;
    private List<ApplicationDetails> list = new ArrayList<>();
    private final ApplicationRepository applicationRepository;

//    private Logger logger= (Logger) LoggerFactory.getLogger(ApplicationServiceImp.class);

    @Override
    public ApplicationDetails addApplication(ApplicationDetails applicationDetails) {
        return this.applicationRepository.save(applicationDetails);
    }

    @Override
    public List<UserDetails> getAllApplications() {
        ResponseEntity<List<UserDetails>> responseEntity = restTemplate.exchange(
                "http://localhost:8090/personaldetails/details",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<UserDetails>>() {
                }
        );

        List<UserDetails> listOfAllUser = responseEntity.getBody();

        if (listOfAllUser != null) {
            for (UserDetails userDetails : listOfAllUser) {
                userDetails.setStatus("pending");
            }
        }

        return listOfAllUser;
    }


    @Override
    public ApplicationDetails getApplicationById(int id) {
        var applicationDetails = this.applicationRepository.findById(id);
        return applicationDetails.orElseThrow();
    }

    @Override
    public ApplicationDetails updateApplicationStatus(int id, ApplicationDetails applicationDetails) {

        return applicationRepository.save(applicationDetails);
    }

    @Override
    public UserDetails getByEmailId(String emailId) {
        UserDetails userDetails = restTemplate.getForObject("http://localhost:8090/personaldetails/details/foos?email=" + emailId, UserDetails.class);
//      logger.info((Supplier<String>) userDetails);
        return userDetails;
    }

    @Override
    public UserDetails updateByEmailId(String emailId,String newStatus) {
        UserDetails obj = new UserDetails();
        obj = restTemplate.getForObject("http://localhost:8090/personaldetails/details/foos?email=" + emailId, UserDetails.class);
        obj.setStatus("accepted");

        return obj;
    }

    @Override
    public void DeleteApplication(int id) {
        this.applicationRepository.deleteById(id);
    }

    @Override
    public String getStatus(String emailId, UserDetails userDetails) {
        UserDetails userStatus = restTemplate.getForObject("http://localhost:8090/personaldetails/details/foos?email=" + emailId, UserDetails.class);
        String findStatus = userDetails.getStatus();
        return findStatus;
    }

    @Override
    public LoanDetails getLoanDetailsByEmailId(String emailId) {
        LoanDetails loanDetails = restTemplate.getForObject("http://localhost:8090/personaldetails/loandetails/" + emailId, LoanDetails.class);
//      logger.info((Supplier<String>) userDetails);

        return loanDetails;
    }
}
