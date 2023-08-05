import { TestBed } from '@angular/core/testing';

import { MealService } from './meal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MealService', () => {
  let service: MealService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  xit('Deberia hacer una peticion HTTP', (done: DoneFn)=>{
    service.getList().subscribe((res)=>{
      console.log(res);
      done();
      // USO DE MOCKS
    })
  })
});
