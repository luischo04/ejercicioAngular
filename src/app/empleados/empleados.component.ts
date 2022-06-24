import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../models/empleado.model';
import { EmpleadosService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {
  
  empleadosLst: Empleado[] = [];
  displayedColumns: string[] = [
    'nombreCompleto',
    'fechaNacimiento',
    'edad',
    'cargo',
    'estatus',
    'editar',
    'eliminar'
  ];

  dataSource = new MatTableDataSource<Empleado>(this.empleadosLst)
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor( private empleadosService: EmpleadosService, private router: Router ) { 
  }

  ngOnInit(): void {
    this.empleadosLst = this.empleadosService.empleados;
  }

  agregar() {
    this.router.navigate(['empleados/formulario']);
  }

  eliminarPersona(index: number) {
    this.empleadosLst.splice(index, 1);
    this.router.navigate(['empleados']);
}


}
