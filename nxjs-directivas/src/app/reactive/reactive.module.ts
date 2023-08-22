import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { AreaMouseDirective } from './directives/area-mouse.directive';



@NgModule({
  declarations: [
    ContainerComponent,
    AreaMouseDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[ContainerComponent]
})
export class ReactiveModule { }
