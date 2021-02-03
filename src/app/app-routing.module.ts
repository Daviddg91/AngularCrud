import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

//import {PedidosComponent} from "./components/pedidos/pedidos.component";
import {PageNotFoundComponentComponent} from "./components/page-not-found-component/page-not-found-component.component";
 import {ClientesComponent} from "./components/clientes/clientes.component";
import {CreateClientesComponent} from "./components/create-clientes/create-clientes.component";
import {DetailsClientesComponent} from "./components/details-clientes/details-clientes.component";

const routes: Routes = [

  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  

//{ path: 'pedidos', component: PedidosComponent },
{ path: 'crearUsuarios', component: CreateClientesComponent },
{ path: 'details-usuarios/:dni', component: DetailsClientesComponent },
{ path: 'clientes', component: ClientesComponent },
  { path: '**', component: PageNotFoundComponentComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
