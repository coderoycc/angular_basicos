import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    NavbarComponent,
    GridComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [GridComponent]
})
export class MealModule { }
