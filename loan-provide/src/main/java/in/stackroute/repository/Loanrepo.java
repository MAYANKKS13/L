package in.stackroute.repository;

import in.stackroute.model.Loantype;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface Loanrepo extends ElasticsearchRepository<Loantype,Integer>
{

}
