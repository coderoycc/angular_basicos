import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { GridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    SubtituloComponent,
    ListadoTareasComponent,
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GridComponent
  ]
})
export class TareasModule { }
// Este modulo de tareas contiene los componentes que se van a usar en la app de tareas:
// Contiene el subtitulo, el listado de tareas y el grid 
// el grid sirve para poder englobar el listado de tareas con los estilos de bulma
// Para que se use este modulo, solamente exportamos el componente grid que lo tiene todo
// y lo importamos en el app.module.ts