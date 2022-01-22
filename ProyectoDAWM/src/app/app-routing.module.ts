import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { InnerPageComponent } from "./inner-page/inner-page.component";
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: LandingComponent
  },
  {path:'Rutas',component:InnerPageComponent},
  {path:'login',component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
