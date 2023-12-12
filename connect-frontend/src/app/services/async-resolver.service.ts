

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LoanDetailsService } from './loan-details.service';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncResolverService implements Resolve<any> {
  constructor(private loanDetails: LoanDetailsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>{
    console.log('Called Get Product in resolver...', route);

    return this.loanDetails.getLoanDetails().pipe(
      catchError(error => {
        return of('No data');
      })
    );
 // Replace with your service method to fetch data
  }
}
