import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloComponent } from './subtitulo.component';
import { TareasService } from '../services/tareas.service';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtituloComponent ],
      providers: [TareasService]
    })
    .compileComponents();

    // inyectamos nuestro servicio para usarlo en donde sea
    service = TestBed.inject(TareasService);

    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // console.log(component)
    expect(component).toBeTruthy();
  });

  it("Deberia tener 4 elementos al inicio", ()=>{
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector("#cantidad")?.textContent?.trim();
    // expect(tareas).toContain("Número de tareas: 4");
    expect(tareas).toEqual("Número de tareas: 4");
  });

  it("Deberia tener 3 elementos al eliminar una tarea", ()=>{
    service.deleteTarea(0);
    fixture.detectChanges();
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector("#cantidad")?.textContent?.trim();
    expect(tareas).toEqual("Número de tareas: 3");
  })
});
