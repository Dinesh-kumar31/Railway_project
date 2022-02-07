import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainPageComponent } from './components/Before-login/login-main-page/login-main-page.component';
import { LoginHeaderComponent } from './components/Before-login/login-header/login-header.component';
import { LoginFooterComponent } from './components/Before-login/login-footer/login-footer.component';
import { LoginPageComponent } from './components/Before-login/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, LoginMainPageComponent, LoginHeaderComponent, LoginFooterComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
