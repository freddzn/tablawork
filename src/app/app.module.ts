import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';
import { SearchstringPipe } from './searchstring.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchstringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
