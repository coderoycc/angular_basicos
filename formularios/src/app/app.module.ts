import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioTemplateComponent } from './formulario-template/formulario-template/formulario-template.component';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive/formulario-reactive.component';
import { FormularioReactiveModule } from './formulario-reactive/formulario-reactive.module';
import { FormularioTemplateModule } from './formulario-template/formulario-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormularioReactiveModule,
    FormularioTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
