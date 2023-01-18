import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosOfertasComponent } from './precios-ofertas/precios-ofertas.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './sistema/crud/crud.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosGBComponent } from './productos/productos-gb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { landingComponent } from './Landing/landing.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    landingComponent,
    ServiciosComponent,
    PreciosOfertasComponent,
    ContactosComponent,
    LoginComponent,
    CrudComponent,
    FooterComponent,
    ProductosGBComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
