import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  idElement: string = '#draggable';
  maximumSize: boolean;
  miniSize: boolean;
  valor: any;

  constructor() { }

  ngOnInit() {
    this.initWindow();
  }

  initWindow() {
    $(() => {
      $(this.idElement).draggable();
    });

    $(() => {
      $(this.idElement).resizable({
        minHeight: 200,
        minWidth: 200,
      });
    });
  }

  maximize() {
    this.maximumSize = true;
    $(this.idElement).addClass('maximized');
    $(this.idElement).draggable('disable');
    $(this.idElement).resizable('disable');
  }

  resizable() {
    this.maximumSize = false;
    $(this.idElement).removeClass('maximized');
    $(this.idElement).draggable('enable');
    $(this.idElement).resizable('enable');
  }

  minimize() {
    this.miniSize = true;
    $(this.idElement).draggable('disable');
    $(this.idElement).resizable('disable');
  }

  undoMinimize() {
    this.miniSize = false;
    this.initWindow();
  }

  closeWindow() {
    $(this.idElement).remove();
  }

}
