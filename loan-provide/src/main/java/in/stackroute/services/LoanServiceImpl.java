package in.stackroute.services;


import in.stackroute.model.Loantype;
import in.stackroute.repository.Loanrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanServiceImpl implements LoanService
{
    private final Loanrepo loanRepository;

    @Autowired
    public LoanServiceImpl(Loanrepo loanRepository) {
        this.loanRepository = loanRepository;
    }

    @Override
    public Loantype createLoan(Loantype loantype) {
        return loanRepository.save(loantype);
    }

    @Override
    public Iterable<Loantype> getAllLoans()
    {
        return loanRepository.findAll();
    }

    //------------ADDED NEW BELOW---------------
    @Override
    public Loantype getLoanById(int id) {
        return loanRepository.findById(id).orElse(null);
    }
}
