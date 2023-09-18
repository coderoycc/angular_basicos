import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    proyectoR: this.fb.control('Hola', 
      [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(5)
      ]
    ),
    horasR: this.fb.control(0, 
      [
        Validators.required, 
        Validators.min(0), 
        Validators.max(10)
      ]
    ),
    tecnologiasR: this.fb.array([])
  });
  get tecnologiasR(){
    return this.miFormulario.get("tecnologiasR") as FormArray
    // Devolvemos el array de las tecnologias de nuestro formulario
  }

  // Creamos una variable TECNOLOGIA indivudual
  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
  ]) // Para poder activarlo individualmente asignamos como databinding en el campo html [formControl]="tecnologia" 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  verificaForm(){
    return this.miFormulario.invalid && this.miFormulario.touched;
  }

  agregarTecnologia(){
    if(this.tecnologia.invalid) return;
    this.tecnologiasR.push(this.fb.control(this.tecnologia.value));
    this.tecnologia.reset();
    console.log(this.tecnologiasR.value)
  }
}
