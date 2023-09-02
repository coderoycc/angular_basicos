import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    proyectoR: this.fb.control('Hola', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
    horasR: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    tecnologiasR: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  verificaForm(){
    return this.miFormulario.invalid && this.miFormulario.touched;
  }
}
