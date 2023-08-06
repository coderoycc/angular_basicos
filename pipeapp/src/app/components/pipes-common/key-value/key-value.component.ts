import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css']
})
export class KeyValueComponent implements OnInit {
  estudiante = {
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
