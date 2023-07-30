import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  // tareas: Array<string> = ["Barrer", "Fregar", "Cocinar", "Pasear al perro"];
  constructor(private tareasService: TareasService) { }

  get tareas(){
    return this.tareasService.tareas;
  }
  delete(i: number){
    this.tareasService.deleteTarea(i);
    // console.log('[DELETE LISTADO TAREAS]: ', i);
  }
  complete(nombre: string){
    this.tareasService.completarTarea(nombre);
  }
}
