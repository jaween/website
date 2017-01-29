import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }             from './app.component';
import { ExhibitItemCardComponent } from './exhibit-item-card.component';
import { ExhibitComponent }         from './exhibit.component';
import { NavigationComponent }      from './navigation.component';

@NgModule({
  imports: [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent,
    ExhibitItemCardComponent,
    ExhibitComponent,
    NavigationComponent,
  ],
  bootstrap: [
    AppComponent 
  ]
})
export class AppModule { }
