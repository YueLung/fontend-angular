import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../core/utils/local-storage';
import { MenuModel } from './models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userName?: string | null;
  menuModels?: Array<MenuModel>;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.userName = LocalStorage.getUserName();
    this.httpClient.get('./assets/menu.json').subscribe(result => {
      this.menuModels = result as Array<MenuModel>;
    });
  }

  logout() {
    LocalStorage.removeUserName();
    this.router.navigate(['/account/login2']);
  }

}
