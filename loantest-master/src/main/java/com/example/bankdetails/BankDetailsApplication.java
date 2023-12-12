package com.example.bankdetails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BankDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankDetailsApplication.class, args);
	}

}
