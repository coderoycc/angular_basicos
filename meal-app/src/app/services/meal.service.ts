import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // en cualquier parte de la app se puede usar
})
export class MealService {
  mealList: Array<any> = [];

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }
  /*Para usar parametros URL se usa la propiedad params de la funcion get 
  this.http.get('https://www.themealdb.com/api/json/v1/1/', {params: {name: 'Juan', age: 25}});
  */
}
