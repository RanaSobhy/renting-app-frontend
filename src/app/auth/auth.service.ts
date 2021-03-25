import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<SocialUser | null>(null);

  constructor() {}

  setUser(newUser: SocialUser) {
    this.user.next(newUser);
  }
}
