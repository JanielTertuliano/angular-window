import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routingComponents, AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { TelaComponent } from './tela/tela.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    routingComponents,
    TelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
