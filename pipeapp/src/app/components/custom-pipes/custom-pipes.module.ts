import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { DarkModePipe } from 'src/app/shared/pipes/dark-mode.pipe';
import { TemperaturePipe } from 'src/app/shared/pipes/temperature.pipe';



@NgModule({
  declarations: [
    CustomContainerComponent, 
    DarkModePipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ CustomContainerComponent, DarkModePipe ]
  // Exportacion necesaria para que se pueda usar el componente en en modulo maestro app.module.ts (DARKMODE)
})
export class CustomPipesModule { }
