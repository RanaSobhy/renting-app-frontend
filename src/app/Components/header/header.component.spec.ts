import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from 'src/app/Models/user.model.ts';
import { AuthService } from 'src/app/Services/auth.service';
import { HeaderComponent } from './header.component';

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
let authService: any;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', [
      'googleLogin',
      'setUser',
    ]);
    let googleLoginInSpy = authService.googleLogin.and.returnValue(
      of(savedUser)
    );
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService.user = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user should be logged out', () => {
    expect(component.isAuthenticated).toBe(false);
  });

  it('should have log in & sign up buttons', () => {
    const headerDe: DebugElement = fixture.debugElement;
    const headeEl: HTMLElement = headerDe.nativeElement;
    const buttons = headeEl.querySelectorAll('button');
    expect(buttons).toBeTruthy();
    expect(buttons.length).toEqual(2);
    expect(buttons[0].textContent).toEqual('Login');
    expect(buttons[1].textContent).toEqual('Sign-up');
  });

  it('should welcome user', () => {
    component.isAuthenticated = true;
    component.currentUser = savedUser;
    fixture.detectChanges();
    const headerDe: DebugElement = fixture.debugElement;
    const headeEl: HTMLElement = headerDe.nativeElement;
    expect(headeEl.textContent).toContain(`Hello! ${savedUser.firstName}`);
  });

});
