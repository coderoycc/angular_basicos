import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  page: number = 1;
  mealList: Array<any> = [];
  mealsInPage: Array<any> = [];
  constructor(private mealService: MealService){
    this.mealService.getList().subscribe((res: any)=>{
      this.mealsInPage = res.meals.slice(0, 8);
      this.mealList = res.meals;
    })
  }

  nextPage(){
    if(this.page*8 >= this.mealList.length){
      return;
    }else{
      // console.log(this.page*8, this.mealList.length);
      this.page++;
      // cuando el valor final de slice es mayor al tamaño del arreglo, se toma el tamaño del arreglo (no se genera error)      
      this.mealsInPage = this.mealList.slice((this.page-1)*8, this.page*8);
    }
  }

  previusPage(){
    if(this.page==1){
      return;
    }else{
      this.page--;
      this.mealsInPage = this.mealList.slice((this.page-1)*8, this.page*8);
    }
  }
}
