import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { Homesection1Component } from './homepage/homesection1/homesection1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomepageComponent,
    HeaderComponent,
    AboutUsComponent,
    OurMissionComponent,
    JoinUsComponent,
    ForgetPassComponent,
    Homesection1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
