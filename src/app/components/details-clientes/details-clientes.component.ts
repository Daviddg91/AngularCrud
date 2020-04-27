import { Component, OnInit } from '@angular/core';
import {Usuarios} from "../../interfaces/usuarios";
import { ActivatedRoute } from '@angular/router';
import {DataApiAppUserService} from "../../services/data-api-app-user.service";
@Component({
  selector: 'app-details-clientes',
  templateUrl: './details-clientes.component.html',
  styleUrls: ['./details-clientes.component.css']
})
export class DetailsClientesComponent implements OnInit {
  usuarios: Usuarios = {
    id: null,
    nombre: null,
    apellidos: null,
    edad: null,
    direccion: null,
    dni: null,
    cp: null,
    telefono: null,
    correo: null,
  };
   
  dni: string;
  editing: false;
    constructor(private routeActivated: ActivatedRoute, apiUsurios: DataApiAppUserService) { 
      this.dni = routeActivated.snapshot.params['dni'];
  if(this.dni){
  editing: true;
  
    apiUsurios.getAllUsersByDNI(this.dni).subscribe((data: Usuarios)=>{  
     
    this.usuarios = data;  
    console.log(this.usuarios);
  });
  }
  
    }
  
    ngOnInit(): void {
    }
  
    modificarUsuario(){
  console.log(this.usuarios);
    }
}
