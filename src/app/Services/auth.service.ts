import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignedInUser } from '../Models/signedInUser.model';
import { SocialUser } from 'angularx-social-login';
import { environment } from '../../environments/environment';
import { User } from '../Models/user.model.ts';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<SignedInUser | null>(null);

  constructor(private http: HttpClient) {}

  setUser(newUser: SignedInUser) {
    this.user.next(newUser);
  }

  googleLogin(data: SocialUser) :Observable <User> {
    return this.http.post<User>(`${environment.backendUrl}/api/auth/login/google`, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      picture: data.photoUrl,
    });
  }
}
