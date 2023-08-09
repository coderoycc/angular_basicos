import { Component } from '@angular/core';

@Component({
  selector: 'app-i18nselect',
  templateUrl: './i18nselect.component.html',
  styleUrls: ['./i18nselect.component.css']
})
export class I18nselectComponent {

  genero: string = 's';

  mensajes = { // objeto necesario para i18nselect
    m: 'Bienenvenido',
    f: 'Bienvenida',
    other: 'Bienvenide XD'
  }

  constructor() { }

}
