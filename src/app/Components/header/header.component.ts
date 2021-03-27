import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignedInUser } from 'src/app/Models/signedInUser.model';
import { User } from 'src/app/Models/user.model.ts';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription | null = null;
  public currentUser: User | null | undefined = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (user: SignedInUser | null) => {
        this.isAuthenticated = !!user;
        this.currentUser = user?.savedUser;
      }
    );
  }
}
