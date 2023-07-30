import { TareasService } from "./tareas.service";

describe('TareasService', () => {
  // instancia de nuestro servicio
  let service: TareasService;
  
  beforeEach(() => {
    service = new TareasService(); // instancia
  });

  it("ToBe: Deberia iniciar con 4 elementos", ()=>{
    expect(service.tareas.length).toBe(4);
  });

  it("Eliminar tarea: probando con el método deletetarea", ()=>{
    service.deleteTarea(0);
    expect(service.tareas.length).toBe(3);
  })

  it("Eliminar tarea no existente", ()=>{
    service.deleteTarea(10);
    expect(service.tareas.length).toBe(4);
  });

  it("SPY: Deberia llamar la funcion COMPLETAR una sola vez", ()=>{
    const spy = jasmine.createSpyObj("TareasService", ['completarTarea']); // creamos el objeto con la clase y el metodo a espiar
    spy.completarTarea("Barrer"); // llamamos al metodo
    expect(spy.completarTarea.calls.count()).toBe(1); // comprobamos que se ha llamado una unica vez

  })
});