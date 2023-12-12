package com.loandetails.individual.service;

import com.loandetails.individual.model.LoanDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.util.List;

public interface LoanDetailsService {
//    Blogs addBlog(Blogs blog);
//    List<Blogs> getAllBlogs();

    LoanDetails saveEntry(LoanDetails emiEntry);

    List<LoanDetails> getDataByEmailId(String emailId);

    public List<String> calculateMonthsAndYearsBetween(String loanTakenDate);
    public LocalDate stringToDateConverter(String dateString);


//    Blogs updateBlogById(Blogs blog, int blogId);
//    Blogs deleteBlogById(int blogId);
}
