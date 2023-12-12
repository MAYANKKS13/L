package in.stackroute.controller;


import in.stackroute.model.Loantype;
import in.stackroute.services.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loans2")
@CrossOrigin(origins = "http://localhost:4200")
public class Loancontrol
{
    private final LoanService loanService;

    @Autowired
    public Loancontrol(LoanService loanService) {
        this.loanService = loanService;
    }

    @PostMapping
    public Loantype createLoan(@RequestBody Loantype loantype) {
        return loanService.createLoan(loantype);
    }

    @GetMapping
    public Iterable<Loantype> getAllLoans() {
        return loanService.getAllLoans();
    }

    //------------ADDED NEW BELOW---------------
    @GetMapping("/{id}")
    public ResponseEntity<Loantype> getLoanById(@PathVariable int id) {
        Loantype loan = loanService.getLoanById(id);

        if (loan != null) {
            return ResponseEntity.ok(loan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}