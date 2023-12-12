package in.stackroute.controller;


import in.stackroute.model.EmailRequest;
import in.stackroute.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/mail")
@CrossOrigin(origins = "http://localhost:4200")
public class Notifycontrol
{
    private EmailService emailService;

//    public Notifycontrol(EmailService emailService) {
//        this.emailService = emailService;
//    }
//
//    @PostMapping("/send")
////    public String sendMail(@RequestParam(value = "file", required = false) MultipartFile[] file, String to, String subject, String body)
//    public String sendMail( String to, String subject, String body)
//    {
//        return emailService.sendMail(to, subject, body);
//    }

    //----------------------------------5 sept---------------------------------
    @Autowired
    public  Notifycontrol(EmailService emailService) {
        this.emailService = emailService;
    }

//    @PostMapping("/send")
//    public String sendMail(@RequestBody EmailRequest emailRequest) {
//        String to = emailRequest.getTo();
//        String subject = emailRequest.getSubject();
//        String body = emailRequest.getBody();
//
//        return emailService.sendMail(to, subject,body);
//}

    //----------------------------------5 sept---------------------------------
//    @PostMapping(value = "/send", consumes = "application/json")
//    public String sendMail(@RequestBody EmailRequest emailRequest) {
//        String to = emailRequest.getTo();
//        String subject = emailRequest.getSubject();
//        String body = emailRequest.getBody();
//
//        return emailService.sendMail(to, subject,body);
//    }
    @PostMapping("/send")
    public String sendMail(@RequestBody EmailRequest emailRequest) {
        return emailService.sendMail(emailRequest.getTo(), emailRequest.getSubject(), emailRequest.getBody());
    }




}
