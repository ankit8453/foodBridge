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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { HelpSupportComponent } from './user-dashboard/help-support/help-support.component';
import { Homesection1Component } from './homepage/homesection1/homesection1.component';
import { LeftNavComponent } from './user-dashboard/left-nav/left-nav.component';
import { SettingsComponent } from './user-dashboard/settings/settings.component';
import { MainDashboardComponent } from './user-dashboard/main-dashboard/main-dashboard.component';
// import { UserDashboardRoutingModule } from './user-dashboard/user-dashboard-routing.module';


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
    Homesection1Component,
    UserDashboardComponent,
    LeftNavComponent,
    UserProfileComponent,
    HelpSupportComponent,
    SettingsComponent,
    MainDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UserDashboardRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
