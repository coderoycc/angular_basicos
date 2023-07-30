import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTareasComponent } from './listado-tareas.component';
import { TareasService } from '../services/tareas.service';

describe('ListadoTareasComponent', () => {
  let component: ListadoTareasComponent;
  let fixture: ComponentFixture<ListadoTareasComponent>;
  let service: TareasService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTareasComponent ],
      providers: [TareasService]
    })
    .compileComponents();

    // inyectamos nuestro servicio para usarlo en donde sea
    service = TestBed.inject(TareasService);

    fixture = TestBed.createComponent(ListadoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // console.log(component)
    expect(component).toBeTruthy();
  });
});
