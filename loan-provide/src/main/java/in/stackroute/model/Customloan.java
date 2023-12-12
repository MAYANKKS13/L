package in.stackroute.model;

import lombok.*;
//import jakarta.persistence.*;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.annotation.Id;


import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;



//@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Document(indexName = "custom2")
public class Customloan
{

    //------------CHANGES AFTER LUNCH-------------------
    @Id
    private String id; // Use String as the ID type for Elasticsearch
    private int loanAmount;
    private double interestRate;
    private int tenure;


}
