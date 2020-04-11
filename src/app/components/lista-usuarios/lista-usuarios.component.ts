import { Component, OnInit } from '@angular/core';
import {DataApiAppUserService} from  "../../services/data-api-app-user.service";
import {Usuarios} from "../../interfaces/usuarios";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styles: [
  ],
})
export class ListaUsuariosComponent implements OnInit {
usuarios =[];
  constructor(private usuariosService: DataApiAppUserService) { }

  ngOnInit(): void {
    this.usuariosService.getAllUsers().subscribe((data: Usuarios[])=>{  
      console.log(data);  
      this.usuarios = data;  
    })
  }
 
}
