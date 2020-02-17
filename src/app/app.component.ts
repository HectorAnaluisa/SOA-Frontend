import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontSOA';

  constructor(private router:Router){}


  Listar(){
    //Este nombre que esta dentro del navigate debe ser el mismo que definimos 
    //Anterioremente en el archivo de rutas OJO CON esto Archivo llamado (app-routing.module.ts)
    this.router.navigate(["listar"]); 
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }


}
