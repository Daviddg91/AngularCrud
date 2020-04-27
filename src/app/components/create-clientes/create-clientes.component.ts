import { Component, OnInit } from '@angular/core';
import {Usuarios} from "../../interfaces/usuarios";
import { ActivatedRoute } from '@angular/router';
import {DataApiAppUserService} from "../../services/data-api-app-user.service";
@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {
  
usuarios: Usuarios = {
  id: null,
  nombre: "",
  apellidos: "",
  edad: 0,
  direccion: "",
  dni: "",
  cp: 0,
  telefono: "",
  correo: "",
};
 
dni: string;
editing: false;
  constructor(private routeActivated: ActivatedRoute, 
    public apiUsurios: DataApiAppUserService) { 


  }

  ngOnInit(): void {
  }
private errorMessage;
private repos;
  saveUsuario(){
    this.apiUsurios.saveUsuarioAPI(this.usuarios).subscribe(  (response) => {                           //Next callback
      console.log('response received')
      this.repos = response;
    },
    (error) => {                              //Error callback
      this.errorMessage = error;
     
      $("div[id^='div-']").text("");

      for (let i = 0; i < this.errorMessage["error"]["errors"].length; i++) {
  $("#div-"+this.errorMessage["error"]["errors"][i]["field"]).text(this.errorMessage["error"]["errors"][i]["defaultMessage"]);
}


      //throw error;   //You can also throw the error to a global error handler
    });
    
  }
  


}
