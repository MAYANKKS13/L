package com.loandetails.individual.service;

import com.loandetails.individual.model.LoanDetails;
import com.loandetails.individual.repository.LoanDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class LoanDetailsServiceImpl implements LoanDetailsService {

    private final LoanDetailsRepository loanDetailsRepository;

    @Autowired
    public LoanDetailsServiceImpl(LoanDetailsRepository loanDetailsRepository) {
        this.loanDetailsRepository = loanDetailsRepository;
    }

    @Override
    public List<LoanDetails> getDataByEmailId(String emailId) {
        List<LoanDetails> dataEntries = loanDetailsRepository.findByEmailId(emailId);

        return dataEntries;
    }

    @Override
    public LoanDetails saveEntry(LoanDetails emiEntry) {

        return loanDetailsRepository.save(emiEntry);
    }

    @Override
    public List<String> calculateMonthsAndYearsBetween(String loanTakenDate) {

        LocalDate loanDate = this.stringToDateConverter(loanTakenDate);
        LocalDate nowDay = LocalDate.now();

        List<String> monthsAndYears = new ArrayList<>();

        LocalDate currentDate = loanDate.plusMonths(1); // Start with the next month
        LocalDate firstDayCurrentMonth = currentDate.withDayOfMonth(1);
        while (!firstDayCurrentMonth.isAfter(nowDay)) {
            String month = firstDayCurrentMonth.getMonth().toString().substring(0, 1).toUpperCase() +
                    firstDayCurrentMonth.getMonth().toString().substring(1).toLowerCase();

            String monthYear = "01 " + month + ", " + firstDayCurrentMonth.getYear();
            monthsAndYears.add(monthYear);
            firstDayCurrentMonth = firstDayCurrentMonth.plusMonths(1);
        }


        return monthsAndYears;
    }

    @Override
    public LocalDate stringToDateConverter(String dateString) {
        // Define the date string
        // Define a DateTimeFormatter for parsing the date string
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");


            // Parse the string to a LocalDate using the formatter
            LocalDate localDate = LocalDate.parse(dateString, formatter);

            // Now you have a LocalDate object
            System.out.println("Parsed LocalDate: " + localDate);
            return localDate;


    }

//    @Override
//    public List<Blogs> getAllBlogs() {
//        return blogRepository.findAll();
//    }
//
//
//
//    @Override
//    public Blogs updateBlogById(Blogs blog, int id)
//    {
//        Blogs blog_get = blogRepository.findById(id).orElseThrow(
//                () -> new BlogDontExistsException("Blog not found")
//        );
//
//        blog_get.setBlogId(id);
//        blog_get.setBlogTitle(blog.getBlogTitle());
//        blog_get.setBlogContent(blog.getBlogContent());
//        blog_get.setAuthorName(blog.getAuthorName());
//
//        return blogRepository.save(blog_get);
//
//    }
//
//    @Override
//    public Blogs deleteBlogById(int blogId) {
//
//        Blogs blog = blogRepository.findById(blogId).orElseThrow(
//                () -> new BlogDontExistsException("Blog don't exist")
//        );
//
//        blogRepository.deleteById(blogId);
//        return blog;
//    }


}
