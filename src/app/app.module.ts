import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { a1Component } from './a1/a1.component';
import { a2Component } from './a2/a2.component';
import { a3Component } from './a3/a3.component';
import { a4Component } from './a4/a4.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    a1Component,
    a2Component,
    a3Component,
    a4Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
