import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SignUpService } from 'src/app/services/sign-up.service';
import { DisplayProductCatalogueService } from 'src/app/services/display-product-catalogue.service';
import { UserService } from 'src/app/services/user.service';
import { Account } from 'src/app/models/account.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  // Properties
  loading: boolean = false;
  error: string = "";

  constructor(
     private loginService: LoginService,
     private userService: UserService,
     private router: Router,
     private signUpService: SignUpService,
     private display: DisplayProductCatalogueService,
    ) { }

  ngOnInit(): void {
  }

  // Method to start
  public onLoginSubmit(form: NgForm) {

    this.loading = true;

    //variable
    const { username } = form.value;
    //const { password } = form.value;

    this.loginService.login(username).subscribe({

      

      next: (user: Account | undefined) => {
        if (user === undefined) {
          this.error = "No such user";
          return;
        }

        // Store the user and redirect to catalogue page
        else{
          this.userService.user = user;
          this.router.navigateByUrl("catalogue")
        }
      },
      error: () => {

      },

      complete: () => {
        this.loading = false;
      }


    });

    
  }

  // Method to sign up
  public onSignUpClick(form: NgForm) {

    this.loading = true;

    //variable
    const { username } = form.value;
    

    if (username === '') {
      return;
    }

    this.signUpService.checkAccount(username).subscribe({
      next:(response) =>{

        if(response === undefined){

          this.signUpService.signUp(username).subscribe({

    
            next: (user: Account | undefined) => {
              
                this.userService.user = user;
                this.router.navigateByUrl("cataloguepage")
              
      
            },
            error: () => {
      
            },
      
            complete: () => {
              this.loading = false;
            }
      
      
          });

        }

      },
      error:() =>{},
      complete:() =>{},
    })

  }


}
