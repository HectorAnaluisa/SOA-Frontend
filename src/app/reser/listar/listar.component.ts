import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service'
import { from } from 'rxjs';
import { Reservacion } from 'src/app/models/reserva_models';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {


  //Ojo que aqui esta variable debe contener el mismo nombre con el que va a ser recorido con 
  //el ngFor ya que se dice que reserv va a corrrer por reservaciones de esta parte del com
  reservaciones: Reservacion[]; 
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    
    this.service.getReservaciones().subscribe(data =>{
      this.reservaciones = data; 
    }); 
  }

  Editar(reserv:Reservacion):void{
    localStorage.setItem("id",reserv.id.toString()); 
    this.router.navigate(["edit"]);
  }

}
