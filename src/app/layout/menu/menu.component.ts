import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'com-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() data: any;
  @Input() title = '';
  @Input() icon = '';
  @Input() isRootNode = false;

  constructor() { }

  // isExpandable(node: string): boolean {
  //   return this.database.isExpandable(node);
  // }

}
