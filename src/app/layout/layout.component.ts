import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../core/utils/local-storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  userName?: string | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = LocalStorage.getUserName();
  }

  logout() {
    LocalStorage.removeUserName();
    this.router.navigate(['/account/login']);
  }

}
