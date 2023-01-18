import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoGBComponent } from './contacto-gb/contacto-gb.component';
import { FooterGBComponent } from './footer-gb/footer-gb.component';
import { HeaderGBComponent } from './header-gb/header-gb.component';
import { InicioGBComponent } from './inicio-gb/inicio-gb.component';
import { LoginGBComponent } from './login-gb/login-gb.component';
import { OfertasGBComponent } from './ofertas-gb/ofertas-gb.component';
import { ProductosGBComponent } from './productos-gb/productos-gb.component';

const routes: Routes = [
  { path: '', component: InicioGBComponent },
  { path: 'inicio', component: InicioGBComponent },
  { path: 'login', component: LoginGBComponent },
  { path: 'contacto', component: ContactoGBComponent },
  { path: 'ofertas', component: OfertasGBComponent },
  { path: 'productos', component: ProductosGBComponent },
  { path: 'header', component: HeaderGBComponent },
  { path: 'footer', component: FooterGBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
