import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { JoinUsComponent } from './join-us/join-us.component';
=======
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
>>>>>>> 4a9768eb724d09a9b1ffca6a4d610292eb0b1be9

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomepageComponent,
<<<<<<< HEAD
    HeaderComponent,
    AboutUsComponent,
    OurMissionComponent,
    JoinUsComponent
=======
    ForgetPassComponent
>>>>>>> 4a9768eb724d09a9b1ffca6a4d610292eb0b1be9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
