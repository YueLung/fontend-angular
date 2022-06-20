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

  get color(): string {
    if (this.model!.percent < 33) return 'warn';
    if (this.model!.percent < 66) return 'accent';
    if (this.model!.percent < 100) return 'primary';
    return 'warn';
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
