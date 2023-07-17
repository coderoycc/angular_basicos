import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input() contador: number = 0;

  @Output() incrementar = new EventEmitter<number>();

  increment() {
    this.contador++;
    this.incrementar.emit(this.contador);
  }
}
