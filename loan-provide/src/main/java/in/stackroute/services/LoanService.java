package in.stackroute.services;

import in.stackroute.model.Loantype;
import org.springframework.stereotype.Service;
import java.util.List;


public interface LoanService
{

    Loantype createLoan(Loantype loantype);
    Iterable<Loantype> getAllLoans();

    //------------ADDED NEW BELOW---------------
    Loantype getLoanById(int id);

}
