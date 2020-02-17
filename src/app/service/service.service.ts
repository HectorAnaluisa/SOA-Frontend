import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
//Ojo aqui se llama al modelo que creamos para hacer uso de los datos que vamos a consumir con 
//la llamada a nuestro servicio se usa este importa para guardar detro de el lo que se va a mostrar en las 
//tablas
import { Reservacion } from '../models/reserva_models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }
  Url = 'http://localhost:8000/api/reservaciones'; 

  getReservaciones(){
    //Ojo aqui se hace un llamado GET a nuestro proyecto Backend 
    //Este nos retorna un arreglo que sera almacenado en el modelo de datos
    //La url esta definida
    return this.http.get<Reservacion[]>(this.Url); 
  }

  crearreservacion(reserv:Reservacion){
    return this.http.post<Reservacion>(this.Url,reserv); 
  }

  getReservacionesId(id:number){
    return this.http.get<Reservacion>(this.Url+"/"+id);
  }

  updateReservaciones(reserv:Reservacion){
    return this.http.put<Reservacion>(this.Url+"/update/"+reserv.id,Reservacion); 
  }


}


