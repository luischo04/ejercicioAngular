import { EventEmitter, Injectable } from "@angular/core";
import { Empleado } from "../models/empleado.model";

@Injectable()
export class EmpleadosService {

    empleados: Empleado[] = [
    
    ];

    emitirIndice = new EventEmitter<number>();

    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }

    encontrarEmpleado(index: number){
        let empleado: Empleado = this.empleados[index];
        return empleado;
    }

    modificarPersona(index: number, empleado: Empleado) {
        let personaModificar = this.empleados[index];
        personaModificar.nombreCompleto = empleado.nombreCompleto;
        personaModificar.fechaNacimiento = empleado.fechaNacimiento;
        personaModificar.edad = empleado.edad;
        personaModificar.cargo = empleado.cargo;
        personaModificar.estatus = empleado.estatus;
    }

    eliminarPersona(index: number) {
        this.empleados.splice(index, 1);
        
    }

    
}