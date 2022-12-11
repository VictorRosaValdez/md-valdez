import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {find, map, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account.model';
import { HttpHeaders } from '@angular/common/http';

const {apiURL} = environment;

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  public checkAccount(accountname: string,): Observable<Account | undefined>{

    // HttpClient = Observable
    return this.http.get<Account>(apiURL + "?customerName=" + accountname)
    
    //Return an object or an undefined
    .pipe( find( element => element.name === accountname)
    )
  }

  public signUp(accountname: string): Observable<Account | undefined>{

    // Headers
    const headers = new HttpHeaders({
      'content-type': 'application/json'
    });

    return this.http.post<Account>(
      apiURL,
      {
        customerName: accountname,
        // To implement orders
      },
      { headers }
    );

  }

}
