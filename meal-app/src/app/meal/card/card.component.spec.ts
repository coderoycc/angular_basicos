import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardComponent } from './card.component';
import { MealService } from 'src/app/services/meal.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let service: MealService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [HttpClientTestingModule], 
      // debemos usar los mismos imports que en el modulo superior (meal.module.ts)
      // Usamos el HttpClientTestingModule para no hacer peticiones reales
      providers: [MealService]
    })
    .compileComponents();
    
    service = TestBed.inject(MealService);
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
