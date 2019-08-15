import { Component, OnInit, Input } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() title: string;
  @Input() idElement: string;
  @Input() index: number;

  maximumSize: boolean;
  miniSize: boolean;

  constructor() {

  }

  ngOnInit() {
    this.initWindow();
  }

  initWindow() {
    $(() => {
      $('#' + this.idElement).draggable({
        start: (e, ui) => {
          $('.ui-draggable').not(ui.helper.css('z-index', '1'))
            .css('z-index', '0');
        }
      });

      $('#' + this.idElement).resizable({
        minHeight: 200,
        minWidth: 200,
      });

      $('.ui-icon-gripsmall-diagonal-se').attr('style', 'z-index: 0');
    });
  }

  clickWindow() {
    $('.ui-draggable').not($('#' + this.idElement).css('z-index', '1'))
    .css('z-index', '0');
  }

  maximize() {
    this.maximumSize = true;
    $('#' + this.idElement).addClass('maximized');
    $('#' + this.idElement).draggable('disable');
    $('#' + this.idElement).resizable('disable');
  }

  resizable() {
    this.maximumSize = false;
    $('#' + this.idElement).removeClass('maximized');
    $('#' + this.idElement).draggable('enable');
    $('#' + this.idElement).resizable('enable');
  }

  minimize() {
    this.miniSize = true;
    // $('.minimized').attr('style', `left: ${10 * this.index}%`);
    $('#' + this.idElement).draggable('disable');
    $('#' + this.idElement).resizable('disable');
  }

  undoMinimize() {
    this.miniSize = false;
    this.initWindow();
  }

  closeWindow() {
    $('#' + this.idElement).remove();
  }

}
