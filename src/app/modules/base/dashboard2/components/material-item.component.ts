import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'com-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.scss']
})
export class MaterialItemComponent implements OnInit {
  @Input() name = 'test';
  @Input() iconType = 'drive_eta';

  isMouseOver = false;

  constructor() { }

  ngOnInit(): void {
  }

}
