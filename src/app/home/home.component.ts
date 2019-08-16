import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayWindow = [
    // { title: 'TITULO 1', idElement: 'draggable', },
    // { title: 'TITULO 2', idElement: 'draggable_2' },
    // { title: 'TITULO 3', idElement: 'draggable_3' },
    // { title: 'TITULO 4', idElement: 'draggable_4' },
    // { title: 'TITULO 5', idElement: 'draggable_5' },
    // { title: 'TITULO 6', idElement: 'draggable_6' }
  ];

  constructor() { }

  ngOnInit() {
    console.log($('.minimized'));
  }

  newWindow() {
    const index = this.arrayWindow.length + 1;
    this.arrayWindow.push({ title: 'TITULO ' + index, idElement: 'draggable_' + index });
  }

}
