package com.stackroute.authentcation_service.controller;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.stackroute.authentcation_service.jwt.AuthJwt;
import com.stackroute.authentcation_service.model.Login;
import com.stackroute.authentcation_service.model.Response;
import com.stackroute.authentcation_service.model.User;
import com.stackroute.authentcation_service.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AuthController {

   private final AuthService authService;
   @Autowired
   private AuthJwt myjwtconfig;




   @PostMapping("/signup")
   public ResponseEntity<Response> createUser(@RequestBody User user)
   {
       if(authService.findByEmail(user.getEmail()))
       {
           return ResponseEntity.status(HttpStatusCode.valueOf(403)).body(new Response("User exists already"));
       }

       if(user.getPassword().length()<8)
       {
           return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new Response("Password must contains 8 characters"));
       }


       var users = authService.add(user);
       return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new Response("SignedUp Successfully"));

   }




    @PostMapping("/verify")
    public ResponseEntity<Boolean> verifyUser(@RequestBody String token)
    {


        System.out.println(token);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(myjwtconfig.validateJwtToken(token));

    }


    @PostMapping("/login")
    public ResponseEntity<Response> loginUser(@RequestBody Login user)
    {
        if(!authService.findByEmail(user.getEmail()))
        {
            return ResponseEntity.status(HttpStatusCode.valueOf(401)).body(new Response("User does not exists"));
        }

        User dbUser = authService.findUserByEmail(user.getEmail());
        if(!dbUser.getPassword().equals(user.getPassword()))
        {
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new Response("Password does not match"));
        }

        String token = myjwtconfig.generateJwtToken(user.getEmail());
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new Response(token));

    }




}
