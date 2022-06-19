import { Component } from '@angular/core';
import { MaterialModel } from '../models/material.model';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.page.html',
  styleUrls: ['./dashboard2.page.scss']
})
export class Dashboard2Page {
  src1: Array<MaterialModel> = [];
  src2: Array<MaterialModel> = [];
  src3: Array<MaterialModel> = [];

  constructor() {
    const preName = 'Test';
    const iconAry = [
      'add_shopping_cart',
      'flight_takeoff',
      'drive_eta',
      'card_travel',
      'markunread_mailbox',
      'restore_from_trash',
      'gavel',
      'query_builder',
      'payment'
    ];

    const src1Count = 7;
    const src2Count = 3;
    const src3Count = 60;

    for (let i = 0; i < src1Count; ++i) {
      this.src1.push(
        {
          name: `${preName}${(i + 1).toString()}`,
          percent: this.getRandomInt(101),
          iconType: iconAry[this.getRandomInt(iconAry.length)]
        }
      );
    }

    for (let i = 0; i < src2Count; ++i) {
      this.src2.push(
        {
          name: `${preName}${(i + 1).toString()}`,
          percent: this.getRandomInt(101),
          iconType: iconAry[this.getRandomInt(iconAry.length)]
        }
      );
    }

    for (let i = 0; i < src3Count; ++i) {
      this.src3.push(
        {
          name: `${preName}${(i + 1).toString()}`,
          percent: this.getRandomInt(101),
          iconType: iconAry[this.getRandomInt(iconAry.length)]
        }
      );
    }


  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
