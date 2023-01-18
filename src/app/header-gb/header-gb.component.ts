import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-gb',
  templateUrl: './header-gb.component.html',
  styleUrls: ['./header-gb.component.css']
})
export class HeaderGBComponent implements OnInit {

  isLoggedIn = false;

constructor (private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/login']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }


  ngOnInit(): void {
  }

}
