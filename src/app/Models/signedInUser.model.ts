import { SocialUser } from 'angularx-social-login';
import { User } from './user.model.ts';

export class SignedInUser {
  public savedUser: User;
  public socialUser: SocialUser;

  constructor(savedUser: User, socialUser: SocialUser) {
    this.savedUser = savedUser;
    this.socialUser = socialUser;
  }
}
