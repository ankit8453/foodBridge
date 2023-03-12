import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.router.navigate(['']);
  }

  gotoAboutus() {
    this.scroller.scrollToAnchor('AboutUs');
  }
  gotoOurMission() {
    this.scroller.scrollToAnchor('OurMission');
  }
  gotoHome() {
    // this.scroller.scrollToAnchor('HomeSection1');
    window.scrollTo(0, 0);
  }
}

