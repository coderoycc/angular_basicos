import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ContadorComponent } from "./contador.component";
import { ButtonAddComponent } from "./button-add/button-add.component";

describe('Pruebas de Contador', () => {
  // bloque que se ejecuta antes de todas las pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent, ButtonAddComponent], // Declaramos mas subcomponenete para que se puedan usar en las pruebas (test integration) 
      // se carga el elemento que se va a probar
      // En caso de ser un servicio se carga en providers
    }).compileComponents(); 
  });

  it('Debe de crear el componente', () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    // Obtenemos la instacia de nuestro componente (fixture) y comprobamos que exista con toBeTruthy es decir que esperamos un valor verdadero 
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('Debe mostrar texto contador: 10', () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    fixture.detectChanges(); // renderizamos el componente
    const compiled: HTMLElement = fixture.nativeElement; // obtenemos el html del componente
    expect(compiled.querySelector('h1')?.textContent).toEqual('Contador: 10');
  });

  it('Valor inicial del contador 10', () => {
    // declaramos el componente (como clase)
    const contador = new ContadorComponent();
    expect(contador.contador).toBe(10);
  });
});

describe('Pruebas de integracion', ()=>{
  let fixture: ComponentFixture<ContadorComponent>;
  let component: ContadorComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent, ButtonAddComponent],
    }).compileComponents(); 
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Prueba de evento click', ()=>{
    const compiled: HTMLElement = fixture.nativeElement;
    
    const counterValue = compiled.querySelector('h1')!;

    // FIXTURE tiene acceso a todos los componentes del template y con debugElement indicamos que interactuaremos con el DOM (button)
    const btn: HTMLElement = fixture.debugElement.nativeElement.querySelector('#add');

    btn.click(); // simulamos un click

    fixture.detectChanges(); // renderizamos el componente despues de los cambios
    
    expect(counterValue?.textContent).toEqual('Contador: 11')
  })

});