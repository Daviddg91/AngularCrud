import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DataApiAppUserService} from  "../../services/data-api-app-user.service";
import {Usuarios} from "../../interfaces/usuarios";
import {router} from "angular-route"

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  
  usuarios =[];
  constructor(private usuariosService: DataApiAppUserService,  private chRef: ChangeDetectorRef) { 
  

  }
  dtOptions: any;
  dataTable: any;
  ngOnInit(): void {
    
    
   this.dtOptions = {
     paging: true,
        pagingType: 'full_numbers',
        processing: true,
        responsive: true,
        info: false,
        language: {
          emptyTable: 'No hay Registros en esta tabla',
          zeroRecords: 'No hay coincidencias',
          lengthMenu: 'Mostrar _MENU_ elementos',
          search: 'Buscar:',
          info: 'De _START_ a _END_ de _TOTAL_ elementos',
          paginate: {
            first: 'Prim.',
            last: 'Últ.',
            next: 'Sig.',
            previous: 'Ant.'
          }
        },
      


  }

    this.usuariosService.getAllUsers().subscribe((data: Usuarios[])=>{  
      this.usuarios = data;  


      this.chRef.detectChanges();

    const table: any = $('table');
      this.dataTable = table.DataTable(this.dtOptions);
    })

 
 

}
display: boolean = false;
displayResolve: boolean=false;
ModalDni: string;
nombreUsuarioModal: string;
showDialog(nombreUsuario: string,dni:string) {
  this.nombreUsuarioModal=nombreUsuario;
  this.display = true;
  this.ModalDni=dni;
 
}
 
respuestaModalConfirmationDelete: string;
esconderModalConfirmacion():void{
  

  this.display = false;
}
displayModalResolver():void{
  

  this.displayResolve = true;
}
esconderModalResolver():void{
  

  this.displayResolve = false;
}
refreshPage(){
  window.location.reload();

}
borrarCliente( ){
  
  this.usuariosService.deleteUserByDni(this.ModalDni).subscribe(

    data  => {
    
    this.respuestaModalConfirmationDelete= data;
    //console.log(data);
    setTimeout(() => this.esconderModalConfirmacion(), 1000);

    setTimeout(() => this.displayModalResolver(), 2000);

    setTimeout(() => this.esconderModalResolver(), 3000);

     
    
    setTimeout(() => this.refreshPage(), 4000);

     
    },
    error  => {
    
    this.respuestaModalConfirmationDelete = error;
    
    }
    
    );
}
}