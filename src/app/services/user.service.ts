import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// Properties
private _user?: Account;

// Getter and setter

get user(): Account | undefined{

  return this._user;
}

set user(user: Account | undefined){

  if(!user){
    throw new Error ("The user is undefined.");
  }

  sessionStorage.setItem("user", JSON.stringify(user));
  this._user = user;

}
// Storing the user
constructor() { 

  const storedUser = sessionStorage.getItem("user");
  if(storedUser){

    // Convert it back to an object.
    this._user = JSON.parse(storedUser);
  }
}
}
