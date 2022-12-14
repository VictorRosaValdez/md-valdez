import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="btn btn-danger btn-block btn-sm" (click)="auth.logout({ returnTo: document.location.origin })">
        Uitloggen
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="btn btn-primary btn-block btn-sm" (click)="auth.loginWithRedirect()">Inloggen</button>
    </ng-template>
  `,
  styles: [],
  
})
export class AuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

}
