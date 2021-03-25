import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription | null = null;
  public currentUser: SocialUser|null = null; 
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user: SocialUser|null )=> {
      this.isAuthenticated = !!user;
      this.currentUser = user;
    });
  }

}
