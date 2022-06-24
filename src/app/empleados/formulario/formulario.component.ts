import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    empleadoForm = this.fb.group({
    nombreCompleto : ['', [Validators.required]],
    fechaNacimiento : ['', [Validators.required]],
    edad : ['', [Validators.required, Validators.min(18)]],
    cargo : ['', [Validators.required]],
    estatus : ['', [Validators.required]],
  })

  // const formValue = this.empleadoForm.value;

  constructor( private fb: FormBuilder, private empleadosService: EmpleadosService, private router: Router, private route: ActivatedRoute) {
    
   }
  
  @Input() empleado: Empleado;
  @Input() indice: number;

  ngOnInit(): void {
    console.log(this.indice);
    this.empleadoForm.updateValueAndValidity();
    this.indice = this.route.snapshot.params['id'];
    if(this.indice) {
      let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
      this.empleadoForm.value.nombreCompleto = empleado.nombreCompleto;
      this.empleadoForm.value.fechaNacimiento = empleado.fechaNacimiento;
      this.empleadoForm.value.edad = String(empleado.edad);
      this.empleadoForm.value.cargo = String(empleado.cargo);
      this.empleadoForm.value.estatus = String(empleado.estatus);

    }
  }
  
  getErrorMessage(field: string): string {
    let message = "";
    const campo = this.empleadoForm?.get(field);

    if(campo != null){
      if(campo.errors?.['required']){
        message = "Este campo es requerido";
      } else if (campo.errors?.['min']){
        message = "Tienes que tener mas de 18 años";
      }
    }
    return message;
  }

  onGuardarPersona() {
    const formValue = this.empleadoForm.value;
    let empleadoAgregar = new Empleado(String(formValue.nombreCompleto), String(formValue.fechaNacimiento), Number(formValue.edad), Number(formValue.cargo), Number(formValue.estatus));
    if(this.indice) {
      this.empleadosService.modificarPersona(this.indice, empleadoAgregar);
      this.router.navigate(['empleados']);
    } else {
    this.empleadosService.agregarEmpleado(empleadoAgregar);
    this.router.navigate(['empleados']);
    }
  }
}
