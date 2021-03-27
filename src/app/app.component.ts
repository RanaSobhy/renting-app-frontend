import { Component } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { AuthService } from './Services/auth.service';
import { SignedInUser } from './Models/signedInUser.model';
import { User } from './Models/user.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: SocialUser | null = null;
  loggedIn: boolean = false;

  constructor(private socialAuthService: SocialAuthService, private authService: AuthService) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.authService.googleLogin(user).subscribe((res: User) => {
        this.authService.setUser(new SignedInUser( res, user));
      });
    });
  }
}
