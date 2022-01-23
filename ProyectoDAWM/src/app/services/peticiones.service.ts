import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface usuario{
  nombre:string,
  foto:string
}
interface conductor{
  id: string,
  latitud: number,
  longitud:number,
  max_asientos:number,
  usuario:usuario
}
@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private _http: HttpClient ) { }

  BuscarConductores(){
    return this._http.get<conductor[]>('http://localhost:4000/conductores');
  }
  
}
