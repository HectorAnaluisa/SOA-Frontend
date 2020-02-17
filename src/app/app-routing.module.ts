import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './reser/listar/listar.component';
import { AddComponent } from './reser/add/add.component';
import { EditComponent } from './reser/edit/edit.component';

//Ojo que aqui estamos definiando las rutas que va a tener nuestro proyecto....
//este nombre colocado en el path va a ser usado por el archivo (app.component.ts)
const routes: Routes = [
  {path: 'listar', component:ListarComponent}, 
  {path: 'add', component:AddComponent}, 
  {path: 'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
