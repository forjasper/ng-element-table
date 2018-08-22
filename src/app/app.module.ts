import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgElementTableComponent } from './ng-element-table/ng-element-table.component';
import { NgElementTableModule } from './ng-element-table/ng-element-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgElementTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
