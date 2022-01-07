import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';


//service
import {CardService} from './services/card.service';

//scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ AppComponent, HeaderComponent, CardComponent],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, InfiniteScrollModule ],
  providers: [CardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
