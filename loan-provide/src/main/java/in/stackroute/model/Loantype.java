package in.stackroute.model;

import lombok.*;
//        import jakarta.persistence.*;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.annotation.Id;

//@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Document(indexName = "allloantypes2")
public class Loantype {
    @Id
    private int loanId;

    private String everypossibleloan;

    public Loantype(String everypossibleloan) {
        this.everypossibleloan = everypossibleloan;
    }

}