import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar el contador en 0', () => {
    expect(component.contador).toBe(0);
  });

  it('Incremento del contador a 1', ()=>{
    let contadorNuevo = 0;
    // accedemos a nuevos emitter del boton usando subscribe
    component.incrementar.subscribe((contador: number) => {
      contadorNuevo = contador;
    });

    // Llamamos a la funcion que hace que se emita el evento 
    component.increment();
    expect(contadorNuevo).toBe(1);
  });
});
