import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_LOGIN_URL } from '../common/SpeedstersConstants';

@Component({
  selector: 'app-home-header',
  templateUrl: './templates/home-header-component.html'
})
export class HomeHeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  btnLogin_Clicked(): void {
    this._router.navigate([NAV_LOGIN_URL]);
  }

}
