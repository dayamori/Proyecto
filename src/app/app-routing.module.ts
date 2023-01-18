import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { landingComponent } from './Landing/landing.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosOfertasComponent } from './precios-ofertas/precios-ofertas.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CrudComponent } from './sistema/crud/crud.component';

const routes: Routes = [
  {path:'', component: landingComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'precios', component: PreciosOfertasComponent},
  {path:'contactos', component: ContactosComponent},
  {path:'crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
