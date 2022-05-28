import { Component, Input } from '@angular/core';

//https://reurl.cc/e3yLAj
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
}
