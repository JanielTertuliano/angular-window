import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routingComponents, AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { TelaComponent } from './tela/tela.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Tela2Component } from './tela2/tela2.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    routingComponents,
    TelaComponent,
    MenuComponent,
    Tela2Component,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'CHAVES_GOOGLE_MAPS'
    })
  ],
  entryComponents: [
    AppComponent,
    WindowComponent,
    routingComponents,
    TelaComponent,
    MenuComponent,
    Tela2Component,
    GoogleMapsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
