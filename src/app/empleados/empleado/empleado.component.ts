import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadosService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;
  @Input() indice: number;

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
  }

}
