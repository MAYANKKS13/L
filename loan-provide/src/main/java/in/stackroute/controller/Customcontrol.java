package in.stackroute.controller;

import in.stackroute.model.Customloan;
import in.stackroute.repository.Loanrepo;
import in.stackroute.services.CustomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//---------------------------------25 sept--------------------------------
import in.stackroute.repository.Customrepo;
//---------------------------------25 sept--------------------------------

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customtypes")
@CrossOrigin(origins = "http://localhost:4200")
public class Customcontrol
{
    //------------CHANGES AFTER LUNCH-------------------

    private final CustomService loantypeService;

    @Autowired
    public Customcontrol(CustomService loantypeService) {
        this.loantypeService = loantypeService;
    }


    @PostMapping
    public Customloan createLoantype(@RequestBody Customloan loantype) {
        return loantypeService.createLoantype(loantype);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customloan> getLoantypeById(@PathVariable String id) {
        Optional<Customloan> loantype = loantypeService.getLoantypeById(id);
        if (loantype.isPresent()) {
            return ResponseEntity.ok(loantype.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public Iterable<Customloan> getAllLoantypes() {
        return loantypeService.getAllLoantypes();
    }

    @DeleteMapping("/{id}")
    public void deleteLoantypeById(@PathVariable String id) {
        loantypeService.deleteLoantypeById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customloan> updateLoantype(@PathVariable String id, @RequestBody Customloan updatedLoantype) {
        Customloan updatedLoan = loantypeService.updateLoantype(id, updatedLoantype);
        if (updatedLoan != null) {
            return ResponseEntity.ok(updatedLoan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    //---------------------------------25 sept--------------------------------
    @Autowired
    private Customrepo customloanRepository;

    @GetMapping("/findByLoanAmount")
    public List<Customloan> findByLoanAmount(@RequestParam int loanAmount) {
        return customloanRepository.findByLoanAmountLessThanEqual(loanAmount);
    }
    //---------------------------------25 sept--------------------------------






    //---------------------------------27 sept--------------------------------


    //---------------------------------27 sept--------------------------------


}
