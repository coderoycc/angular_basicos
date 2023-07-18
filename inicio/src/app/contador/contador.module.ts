import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorComponent } from './contador.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

@NgModule({
  // Valores (partes de este componente)
  declarations: [ContadorComponent, ButtonAddComponent, ButtonDisComponent],
  imports: [CommonModule],
  exports: [ContadorComponent], // Exportamos el componente con todas sus partes (hijos)
})
export class ContadorModule {}