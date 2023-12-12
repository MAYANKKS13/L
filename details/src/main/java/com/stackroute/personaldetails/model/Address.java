package com.stackroute.personaldetails.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Address {


    private String street;

    private String zipCode;

    private String villageOrCity;

    private String district;

    private String state;

    private String country;
}
