import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inicio';
  contador: number = 0;

  // creamos una funcion
  increment(){
    this.contador++;
  }
  decrement(){
    this.contador--;
  }

}
