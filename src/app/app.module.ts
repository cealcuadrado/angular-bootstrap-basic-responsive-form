import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { GenericInputComponent } from './shared/generic-input/generic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    GenericInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
