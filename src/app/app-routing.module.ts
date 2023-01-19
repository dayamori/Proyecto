import { RouterModule, Routes } from '@angular/router';
import { landingComponent } from './Landing/landing.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosOfertasComponent } from './precios-ofertas/precios-ofertas.component';
import { CrudComponent } from './sistema/crud/crud.component';
import { ProductosGBComponent } from './productos/productos-gb.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'', component: landingComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'precios', component: PreciosOfertasComponent},
  {path:'crud', component: CrudComponent},
  {path:'productos', component: ProductosGBComponent},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
