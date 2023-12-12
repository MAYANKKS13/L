package com.stackroute.authentcation_service;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthenticationMain{
    public static void main(String[] args) {

        SpringApplication.run(AuthenticationMain.class,args);
    }
}