import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MainDashboardComponent } from './user-dashboard/main-dashboard/main-dashboard.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { HelpSupportComponent } from './user-dashboard/help-support/help-support.component';
import { SettingsComponent } from './user-dashboard/settings/settings.component';
import { LogOutComponent } from './user-dashboard/log-out/log-out.component';

const routes: Routes = [
  {path:'', component:HomepageComponent, },
  {path:'homepage', component:HomepageComponent,},
  {path:'about-us', pathMatch:'full', component:AboutUsComponent, },
  {path:'our-mission', pathMatch:'full', component:OurMissionComponent, },
  {path:'join-us', pathMatch:'full', component:JoinUsComponent, },
  {path:'main-dashboard', pathMatch:'full', component:MainDashboardComponent},
  {path:'user-dashboard', component:UserDashboardComponent},
  {path:'user-profile', component:UserProfileComponent},
  {path:'help-support', component:HelpSupportComponent},
  {path:'settings', component:SettingsComponent},
  {path:'log-out', component:LogOutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
