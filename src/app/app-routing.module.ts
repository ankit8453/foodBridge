import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './header-pages/homepage/homepage.component';
import { AboutUsComponent } from './header-pages/about-us/about-us.component';
import { OurMissionComponent } from './header-pages/our-mission/our-mission.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { UserDashboardComponent } from './header-pages/user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './header-pages/user-dashboard/main-dashboard/main-dashboard.component';
import { UserProfileComponent } from './header-pages/user-dashboard/user-profile/user-profile.component';
import { HelpSupportComponent } from './header-pages/user-dashboard/help-support/help-support.component';
import { SettingsComponent } from './header-pages/user-dashboard/settings/settings.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {path:'', component:HomepageComponent, },
  {path:'', redirectTo:'header-pages/homepage', pathMatch:'full'},
  {path:'header-pages', component:HeaderPagesComponent, children:[
    {path:'homepage', component:HomepageComponent, },
    {path:'about-us', component:AboutUsComponent, },
    {path:'our-mission', component:OurMissionComponent, },
    {path:'user-dashboard', component:UserDashboardComponent, children:[
      {path:'main-dashboard', component:MainDashboardComponent},
      {path:'user-profile', component:UserProfileComponent},
      {path:'help-support', component:HelpSupportComponent},
      {path:'settings', component:SettingsComponent},
    ]},
  ]},
  {path:'header-pages/join-us', redirectTo:'login'},
  {path:'sign-up', component:SignUpComponent,},
  {path:'login/sign-up', redirectTo:'sign-up'},
  {path:'sign-up/login', redirectTo:'login'},
  {path:'login',  component:LoginComponent, },
  // {path:'/homepage', component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
