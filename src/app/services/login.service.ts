import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account.model';


const {apiURL} = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public login(accoutname: string): Observable<Account | undefined>{

    // HttpClient = Observable
    return this.http.get<Account[]>(apiURL + "?accountname=" + accoutname)
    
    //Return an object or an undefined
    .pipe(
      map((response: Account[]) => response.pop())
    )
  }
}
