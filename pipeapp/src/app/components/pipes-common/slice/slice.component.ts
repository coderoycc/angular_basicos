import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Melon', 'Coco', 'Mango', 'Banano', 'Uva', 'Cereza'];
  cadena: string = '1 Esta es una palabra de prueba';
  constructor() { }

  ngOnInit(): void {
  }

}
