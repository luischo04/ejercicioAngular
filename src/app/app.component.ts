import { Component, OnInit } from '@angular/core';
import { Empleado } from './models/empleado.model';
import { EmpleadosService } from './services/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  titulo = 'Lista de empleados';
  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService){}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
}
