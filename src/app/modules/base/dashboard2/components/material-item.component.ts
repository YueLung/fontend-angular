import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MaterialModel } from '../../models/material.model';

@Component({
  selector: 'com-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent implements OnInit {
  @Input() model?: MaterialModel;

  isMouseOver = false;

  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

  someMethod() {
    this.trigger?.openMenu();
  }

  constructor() { }

  ngOnInit(): void {
  }

  onMouseover() {
    this.isMouseOver = true;
    // this.trigger?.openMenu();
  }

  onMouseout() {
    this.isMouseOver = false;
    // this.trigger?.closeMenu();
  }


}
