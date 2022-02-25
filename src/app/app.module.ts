import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHeaderComponent } from './components/Before-login/login-header/login-header.component';
import { LoginFooterComponent } from './components/Before-login/login-footer/login-footer.component';
import { LoginPageComponent } from './components/Before-login/login-page/login-page.component';
import { RegisterPageComponent } from './components/Before-login/register-page/register-page.component';
import { MaterialExampleModule } from './../../material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialExampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
