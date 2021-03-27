import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
