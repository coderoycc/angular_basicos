import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MealService } from '../../services/meal.service';
import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let service: MealService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      imports: [HttpClientTestingModule],
      providers: [MealService]
    })
    .compileComponents();

    service = TestBed.inject(MealService);
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
