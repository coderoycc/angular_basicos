import { TestBed } from "@angular/core/testing";
import { ContadorComponent } from "./contador.component";

describe('Pruebas de Contador', () => {
  // bloque que se ejecuta antes de todas las pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent], 
      // se carga el elemento que se va a probar
      // En caso de ser un servicio se carga en providers
    }).compileComponents(); 
  });

  it('Debe de crear el componente', () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    // Obtenemos la instacia de nuestro componente (fixture) y comprobamos que exista con toBeTruthy es decir que esperamos un valor verdadero 
    expect(fixture.componentInstance).toBeTruthy();
  });



  it('Valor inicial del contador 10', () => {
    // declaramos el componente (como clase)
    const contador = new ContadorComponent();
    expect(contador.contador).toBe(10);
  })
});