import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  mealList: Array<any> = [];
  constructor(private mealService: MealService){
    this.mealService.getList().subscribe((res: any)=>{
      this.mealList = res.meals;
    })
  }
}
