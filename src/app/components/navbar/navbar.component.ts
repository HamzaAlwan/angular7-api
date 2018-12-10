import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((path: NavigationEnd) => {
      if (path.url !== undefined) {
        this.currentUrl = path.url;
      }
    });
  }

  ngOnInit() {}
}
