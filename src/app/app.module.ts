import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatDialogModule} from '@angular/material/dialog';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatCardModule} from '@angular/material/card';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatListModule} from '@angular/material/list';
import{MatTableModule} from '@angular/material/table';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatSortModule} from '@angular/material/sort';
import{MatSelectModule} from '@angular/material/select';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core';
import{MatRadioModule} from '@angular/material/radio';
import{MatMenuModule} from '@angular/material/menu';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatTabsModule} from '@angular/material/tabs';
import{MatExpansionModule} from '@angular/material/expansion';
import{MatStepperModule} from '@angular/material/stepper';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import{MatChipsModule} from '@angular/material/chips';
import{MatTooltipModule} from '@angular/material/tooltip';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatProgressBarModule} from '@angular/material/progress-bar';
import{MatSliderModule} from '@angular/material/slider';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatRippleModule} from '@angular/material/core';
import{MatBadgeModule} from '@angular/material/badge';
import{MatDividerModule} from '@angular/material/divider';
import{MatTreeModule} from '@angular/material/tree';
import{MatBottomSheetModule} from '@angular/material/bottom-sheet';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { landingComponent } from './Landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosOfertasComponent } from './precios-ofertas/precios-ofertas.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './sistema/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    landingComponent,
    FooterComponent,
    ServiciosComponent,
    PreciosOfertasComponent,
    ContactosComponent,
    LoginComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatBadgeModule,
    MatDividerModule,
    MatTreeModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
