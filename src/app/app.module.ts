import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BtnComponent } from './componments/btn/btn.component';
import { MaterialModule } from './models/material.module';
import { CompontsModule } from './componments/componts.module';




@NgModule({
  declarations: [
    AppComponent,
    // BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CompontsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ng - material 按下
