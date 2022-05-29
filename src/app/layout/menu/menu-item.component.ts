import { Component, Input, ViewChild } from '@angular/core';
import { MenuModel } from '../models';

//https://stackblitz.com/edit/dynamic-nested-menus?file=app%2Fapp.component.ts
@Component({
  selector: 'com-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @ViewChild('childMenu') public childMenu: any;
  @Input() items?: Array<MenuModel>;

  constructor() { }
}
