import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
declare let $: any;

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input() title: string;
  @Input() idElement: string;
  @Input() icon: string;

  maximumSize: boolean;

  constructor(public home: HomeComponent) {

  }

  ngOnInit() {
    this.initWindow();
  }

  initWindow() {
    $(() => {
      $('#' + this.idElement).draggable({
        start: (e, ui) => {
          $('.ui-draggable').not(ui.helper.css('z-index', '3'))
            .css('z-index', '2');
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
    $('.ui-draggable').not($('#' + this.idElement).css('z-index', '3'))
      .css('z-index', '2');
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
    $('#' + this.idElement).effect('drop', { direction: 'down' }, 'fast');
    const container = $('.osx-dock');
    const element = $('#min-' + this.idElement);
    element.removeAttr('style');
    container.append(element);
  }

  undoMinimize() {
    $('#' + this.idElement).show().effect('slide', { direction: 'down' }, 'fast');
    const element = $('#min-' + this.idElement);
    element.attr('style', 'display: none');
  }

  closeWindow() {
    $('#' + this.idElement).remove();
    this.home.removeWindow(this.idElement);
  }

}
