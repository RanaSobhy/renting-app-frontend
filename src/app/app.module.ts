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
import { ProductListComponent } from './Components/product/product-list/product-list.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProductCreateComponent } from './Components/product/product-create/product-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    authInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
