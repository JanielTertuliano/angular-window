import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayWindow = [
    { title: 'TITULO 1', idElement: 'draggable', index: 0 },
    { title: 'TITULO 2', idElement: 'draggable_2', index: 1 },
    { title: 'TITULO 3', idElement: 'draggable_3', index: 2 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
