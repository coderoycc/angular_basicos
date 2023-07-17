import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css']
})
export class ButtonDisComponent {
  @Input() contador: number = 0;
  @Output() decrementar = new EventEmitter<number>();
  decrement(){
    this.contador--;
    // enviamos nuestro dato despues de decrementar
    this.decrementar.emit(this.contador);
  }
}
