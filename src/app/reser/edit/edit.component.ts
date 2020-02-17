import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Reservacion } from 'src/app/models/reserva_models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  res:Reservacion = new Reservacion(); 
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar(); 
  }

  Editar(){
    let id= localStorage.getItem("id"); 
    //alert(id); 
    this.service.getReservacionesId(+id).subscribe(data=>{
      this.res = data; 
    })

  }

  Actualizar(cliente:String, plazas:String, precio:String, fechaentrada:String, fechasalida:String, estado:String){
    this.res.cliente = cliente; 
    this.res.plazas = plazas; 
    this.res.precio = precio; 
    this.res.fechaentrada = fechaentrada; 
    this.res.fechasalida = fechasalida; 
    this.res.estado = estado; 

    this.service.updateReservaciones(this.res).subscribe(data => {
      alert("Se Actualizó con exito"); 
      this.router.navigate(["listar"]);
    })
  }

}
