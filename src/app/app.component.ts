import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-window';
  array = [
    { title: 'TITULO 1', idElement: 'draggable' },
    { title: 'TITULO 2', idElement: 'draggable_2' },
    { title: 'TITULO 3', idElement: 'draggable_3' }
  ];
}
