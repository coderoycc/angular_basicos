import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 32,
    direccion: {
      calle: 'Av. Siempre Viva',
      numero: 123,
      ciudad: 'Springfield',
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
