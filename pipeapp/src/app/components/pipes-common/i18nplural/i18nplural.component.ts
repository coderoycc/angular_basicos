import { Component } from '@angular/core';

@Component({
  selector: 'app-i18nplural',
  templateUrl: './i18nplural.component.html',
  styleUrls: ['./i18nplural.component.css']
})
export class I18npluralComponent {

  notificaciones = 0;

  mensajes = { // objeto necesario para i18nplural
    "=0": "No hay notificaciones",
    "=1": "Hay una notificación",
    "other": "Hay # notificaciones"
  }

  constructor() { }

  addNotificaciones(){
    this.notificaciones++;
  }
}
