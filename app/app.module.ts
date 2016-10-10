import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {Config} from "./app.config";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: Config, useFactory: () => Config.getInstance('config.json')}
  ]
})
export class AppModule { }
