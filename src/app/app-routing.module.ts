import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { JoinUsComponent } from './join-us/join-us.component';
const routes: Routes = [
  {path:'', component:HomepageComponent, },
  {path:'homepage', component:HomepageComponent,},
  {path:'about-us', pathMatch:'full', component:AboutUsComponent, },
  {path:'our-mission', pathMatch:'full', component:OurMissionComponent, },
  {path:'join-us', pathMatch:'full', component:JoinUsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
