import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { landingComponent } from './Landing/landing.component';

const routes: Routes = [
  {path:'', component: landingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
