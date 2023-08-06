import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent implements OnInit {
  calificacion: number = 7.91783243;
  porcentaje: number = 0.5689;
  saldo: number = 1234.5;
  constructor() { }

  ngOnInit(): void {
  }

}
