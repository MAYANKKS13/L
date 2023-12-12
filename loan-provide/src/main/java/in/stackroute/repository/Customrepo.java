package in.stackroute.repository;

import java.util.List;

import in.stackroute.model.Customloan;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
public interface Customrepo extends ElasticsearchRepository<Customloan, String>
{
    //------------CHANGES AFTER LUNCH-------------------



    //---------------------------------25 sept--------------------------------
    List<Customloan> findByLoanAmountLessThanEqual(int loanAmount);
    //---------------------------------25 sept--------------------------------



}
