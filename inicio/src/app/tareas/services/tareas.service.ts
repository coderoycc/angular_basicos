import { Injectable } from "@angular/core";
import { Tarea } from "../interfaces/tarea";

@Injectable() 
export class TareasService {
  // Servicio que contiene el listado de tareas (variable de tipo array)
  tareas: Array<Tarea> = [
    {tarea: "Barrer", completada: false},
    {tarea: "Fregar", completada: false},
    {tarea: "Cocinar", completada: false},
    {tarea: "Pasear al perro", completada: false},
  ];

  deleteTarea(indice: number){
    this.tareas = this.tareas.filter((_, i) => i !== indice);
  }
}