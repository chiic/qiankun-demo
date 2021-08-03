import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TetsComponent } from './tets/tets.component';

@NgModule({
  declarations: [
    AppComponent,
    TetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCarouselModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
