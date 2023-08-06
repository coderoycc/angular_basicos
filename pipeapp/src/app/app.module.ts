import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/pipes-common/container/container.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PipesCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
