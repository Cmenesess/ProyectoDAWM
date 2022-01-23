import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { MessageService } from './services/message.service';
import { PeticionesService } from './services/peticiones.service';
import { InicioComponent } from './inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MapComponent,
    InnerPageComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService,PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
