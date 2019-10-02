import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
declare let $: any;

@Component({
  selector: 'app-leaflet-maps',
  templateUrl: './leaflet-maps.component.html',
  styleUrls: ['./leaflet-maps.component.css']
})
export class LeafletMapsComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([46.879966, -121.726909])
  };

  constructor() { }

  ngOnInit() {
  }
}
