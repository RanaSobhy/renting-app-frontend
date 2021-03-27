import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { HeaderComponent } from './Components/header/header.component';
import { AuthComponent } from './Components/auth/auth.component';
import { AuthService } from './Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Components/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
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
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
