package in.stackroute.services;

import in.stackroute.model.Customloan;
import in.stackroute.repository.Customrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.Optional;

@Service
public class CustomService
{
    //------------CHANGES AFTER LUNCH-------------------
    private final Customrepo loantypeRepository;

    @Autowired
    public CustomService(Customrepo loantypeRepository)
    {
        this.loantypeRepository = loantypeRepository;
    }

    public Customloan createLoantype(Customloan loantype) {
        return loantypeRepository.save(loantype);
    }

    public Optional<Customloan> getLoantypeById(String id) {
        return loantypeRepository.findById(id);
    }

    public Iterable<Customloan> getAllLoantypes() {
        return loantypeRepository.findAll();
    }

    public void deleteLoantypeById(String id) {
        loantypeRepository.deleteById(id);
    }

    public Customloan updateLoantype(String id,Customloan updatedLoantype) {
        Optional<Customloan> existingLoantype = loantypeRepository.findById(id);
        if (existingLoantype.isPresent()) {
            Customloan loantype = existingLoantype.get();
            loantype.setLoanAmount(updatedLoantype.getLoanAmount());
            loantype.setInterestRate(updatedLoantype.getInterestRate());
            loantype.setTenure(updatedLoantype.getTenure());
            return loantypeRepository.save(loantype);
        }
        return null;
    }






}
