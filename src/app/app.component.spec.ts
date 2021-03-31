import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialUser,
} from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { User } from './Models/user.model.ts';
import { AuthService } from './Services/auth.service';

const googleUser: SocialUser = {
  name: 'Rana Sobhy',
  firstName: 'Rana',
  lastName: 'Sobhy',
  idToken: '1009',
  provider: 'google',
  id: '2',
  email: 'ranasobhy1212@gmail.com',
  photoUrl: 'null',
  authToken: '2323',
  authorizationCode: '232',
  response: '',
};

const savedUser: User = {
  _id: '54901880-8d03-11eb-958d-8fd9d70cf801',
  firstName: 'Rana',
  lastName: 'Sobhy',
  email: 'ranasobhy1212@gmail.com',
  country: 'Egypt',
  city: 'Giza',
  mobile: '01111111',
  picture: '',
  rating: 3,
};

let socialAuthService: any;
let authService: any;

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    socialAuthService = jasmine.createSpyObj('SocialAuthService', ['signIn']);
    let signInSpy = socialAuthService.signIn.and.returnValue(
      Promise.resolve(googleUser)
    );

    authService = jasmine.createSpyObj('AuthService', [
      'googleLogin',
      'setUser',
    ]);
    let googleLoginInSpy = authService.googleLogin.and.returnValue(
      of(savedUser)
    );

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: SocialAuthService, useValue: socialAuthService },
        { provide: AuthService, useValue: authService },
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: true,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '128201392195-fsingvnnjrc1lp1sj1nuoe0lgsbigsnk.apps.googleusercontent.com'
                ),
              },
            ],
          } as SocialAuthServiceConfig,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    socialAuthService.authState = of(null);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('user should be logged out', () => {
    expect(component.loggedIn).toBe(false);
  });
});
