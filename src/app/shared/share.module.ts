import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class ShareModule { }
