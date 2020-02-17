import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Reservacion } from 'src/app/models/reserva_models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  res:Reservacion = new Reservacion();

  constructor( private router:Router, private service:ServiceService ) {}

  ngOnInit() {
  }
  

  Guardar(cliente:String, plazas:String, precio:String, fechaentrada:String, fechasalida:String, estado:String){
    this.res.cliente = cliente; 
    this.res.plazas = plazas; 
    this.res.precio = precio; 
    this.res.fechaentrada = fechaentrada; 
    this.res.fechasalida = fechasalida; 
    this.res.estado = estado; 

    this.service.crearreservacion(this.res).subscribe(data => {
      alert("Se agrego con exito"); 
      this.router.navigate(["listar"]);
    })
  }

}
