import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: `./contador.component.html`,
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent{
  contador: number = 10;

  recepcionarIncremento(valor: number) {
    // Recepcionamos el valor del componente hijo BUTTON-ADD mediante decorador Output
    this.contador = valor;
  }

  recepcionarDecremento(valor: number){
    // Recepcionamos el valor del componente hijo BUTTON-DIS mediante decorador Output
    this.contador = valor;
  }
}