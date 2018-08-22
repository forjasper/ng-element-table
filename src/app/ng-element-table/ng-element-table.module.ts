import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgElementTableComponent } from './ng-element-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgElementTableComponent],
  exports:[NgElementTableComponent]
})
export class NgElementTableModule { }
