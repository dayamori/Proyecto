import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderGBComponent } from './header-gb/header-gb.component';
import { FooterGBComponent } from './footer-gb/footer-gb.component';
import { LoginGBComponent } from './login-gb/login-gb.component';
import { InicioGBComponent } from './inicio-gb/inicio-gb.component';
import { ContactoGBComponent } from './contacto-gb/contacto-gb.component';
import { OfertasGBComponent } from './ofertas-gb/ofertas-gb.component';
import { ProductosGBComponent } from './productos-gb/productos-gb.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    HeaderGBComponent,
    FooterGBComponent,
    LoginGBComponent,
    InicioGBComponent,
    ContactoGBComponent,
    OfertasGBComponent,
    ProductosGBComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
