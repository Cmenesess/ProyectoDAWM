import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
    success: boolean,
    message: string
  }
  
@Injectable()
export class MessageService {
    constructor(private _http: HttpClient) { }
    
    sendMessage(body: any) {
        return this._http.post('http://localhost:3000/formulario', body);
    }

    login(body:any){
        return this._http.post<myData>("http://localhost:4000/login",body,{withCredentials: true});
    }
}