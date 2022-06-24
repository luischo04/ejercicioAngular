import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { FormularioComponent } from "./empleados/formulario/formulario.component";

const routes: Routes = [
    { path: '', component: EmpleadosComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'empleados/formulario', component: FormularioComponent },
    { path: 'empleados/:id', component: FormularioComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }