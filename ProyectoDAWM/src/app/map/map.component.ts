import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import {PeticionesService} from '../services/peticiones.service'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map!: L.Map;
  icon = {
    icon: L.icon({
      iconSize: [ 25, 25 ],
      iconAnchor: [ 13, 13 ],
      // specify the path here
      iconUrl: 'assets/img/carro.png',
      
   })
  };
  constructor(public _peticiones:PeticionesService){}

  private initMap(): void {
    this.map = L.map('map').setView([-2.18333,-79.8833],13)
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

  }
  CargarConductores(){
    this._peticiones.BuscarConductores().subscribe(conductores=>{
      console.log(conductores)
      for(let conductor of conductores){
        console.log(conductor)
        let marker = L.marker([conductor.latitud,conductor.longitud],this.icon).addTo(this.map)
        marker.addEventListener('mouseover',()=>{
          var cambio_grip=document.getElementsByClassName("carta")[0]
          if(typeof cambio_grip != 'undefined'){
              cambio_grip.classList.replace("carta","carta2");
          }
          document.getElementsByClassName("Titulo")[0].classList.add("border-bottom");
          document.getElementsByClassName("card-body")[0].innerHTML='';
          var plantilla=`
            <h5 class="text-center">${conductor.usuario.nombre}</h5>
            <img referrerpolicy="origin-when-cross-origin" crossOrigin="anonymous"  class="card-img rounded-circle imagenes my-3" src="http://localhost:4000/images/${conductor.usuario.foto}" alt="Card image cap">
            <p class="card-text text-center my-3">Numero asientos: ${conductor.max_asientos}</p>
            <div class="col-md-12 text-center" id="cont-boton">
            </div>
            `
          const elemento=document.createElement("button");
          elemento.innerHTML='Seguir'
          elemento.classList.add("btn","btn-primary")
          document.getElementsByClassName("card-body")[0].innerHTML+=plantilla;
          let boton=document.getElementById("cont-boton");
          boton?.appendChild(elemento);
        })
      }
    })
  }
  ngAfterViewInit(): void {

    this.initMap();
    this.CargarConductores();
  }

  

}
