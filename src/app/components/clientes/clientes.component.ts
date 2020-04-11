import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DataApiAppUserService} from  "../../services/data-api-app-user.service";
import {Usuarios} from "../../interfaces/usuarios";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  usuarios =[];
  constructor(private usuariosService: DataApiAppUserService,  private chRef: ChangeDetectorRef) { }
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
}