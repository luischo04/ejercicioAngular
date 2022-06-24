import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { AppRoutingModule } from './app-routing.module';
import { EmpleadosService } from './services/empleado.service';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormularioComponent } from './empleados/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FormularioComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ EmpleadosService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
