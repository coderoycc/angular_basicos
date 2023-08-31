import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  @ViewChild("miFormulario") miFormulario!: NgForm;
  mensajeError: boolean = false;
  proyectos: any[] = []

  initialForm = {
    proyecto: "",
    tecnologia: "",
    horas: 0
  }

  tecnologias: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    if(this.miFormulario.invalid){
      this.mensajeError = true;
      return;
    }
    this.proyectos.push({
      proyecto: this.miFormulario.controls['proyecto'].value,
      tecnologias: this.tecnologias,
      horas: this.miFormulario.controls['horas'].value
    })
    this.miFormulario.resetForm();
    this.tecnologias = [];
  }
  agregarTec(){
    this.mensajeError = this.mensajeError ? false : true;
    let value = this.miFormulario.controls['tecnologia'].value;
    if(this.miFormulario.controls['tecnologia'].valid && this.miFormulario.controls['tecnologia'].touched){
      this.tecnologias.push(value);
      this.miFormulario.controls['tecnologia'].reset();
    }
    console.log(this.tecnologias)
  }
}
