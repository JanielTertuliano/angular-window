import { TelaComponent } from './../tela/tela.component';
import { Component, OnInit } from '@angular/core';
import { Tela2Component } from '../tela2/tela2.component';
import { LeafletMapsComponent } from '../leaflet-maps/leaflet-maps.component';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayWindow = [];

  constructor() { }

  ngOnInit() {
    $(() => {
      $('.button').draggable();
    });
  }

  newWindow() {
    const index = this.arrayWindow.length + 1;
    this.arrayWindow.push({
      title: 'TITULO ' + index,
      idElement: 'draggable_' + index,
      icon: 'Misc-Desktop-Mac-icon.png',
      backgroundContent: '#3d4248',
      component: TelaComponent,
      openMaxmize: false
    });
  }

  newWindowTela2() {
    const index = this.arrayWindow.length + 1;
    this.arrayWindow.push({
      title: 'TITULO ' + index,
      idElement: 'draggable_' + index,
      icon: 'Folder-Mac-icon.png',
      backgroundContent: '#fdfdfd',
      component: Tela2Component,
      openMaxmize: false
    });
  }

  openMaps() {
    const index = this.arrayWindow.length + 1;
    this.arrayWindow.push({
      title: 'Maps',
      idElement: 'draggable_' + index,
      icon: 'map.png',
      backgroundContent: '#fdfdfd',
      component: LeafletMapsComponent,
      openMaxmize: true
    });
  }

  removeWindow(idElement: any) {
    for (let i = 0; i < this.arrayWindow.length; i++) {
      if (this.arrayWindow[i].idElement === idElement) {
        this.arrayWindow.splice(i, 1);
        break;
      }
    }
  }

}
