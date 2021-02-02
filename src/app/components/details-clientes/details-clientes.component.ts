import { Component, OnInit } from '@angular/core';
import {Usuarios} from "../../interfaces/usuarios";
import { ActivatedRoute } from '@angular/router';
import {DataApiAppUserService} from "../../services/data-api-app-user.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-clientes',
  templateUrl: './details-clientes.component.html',
  styleUrls: ['./details-clientes.component.css']
})
export class DetailsClientesComponent implements OnInit {
  usuarioEditable: Usuarios;
  apiUsurios2: DataApiAppUserService;
  dni: string;
  editing: false;
    constructor(private routeActivated: ActivatedRoute, apiUsurios: DataApiAppUserService, http: HttpClient, private router:Router) { 
      this.dni = routeActivated.snapshot.params['dni'];
      this.apiUsurios2= new DataApiAppUserService(http);
   if(this.dni){
  editing: true;
  
    apiUsurios.getAllUsersByDNI(this.dni).subscribe((data: Usuarios)=>{  
     
    this.usuarioEditable = data[0];  
    console.log(this.usuarioEditable);
  });
  }
  
    }
  
    ngOnInit(): void {
    }
       edited: boolean = false;
       private errorMessage;
    modificarUsuario(){
    
      this.apiUsurios2.modifyUsuarioAPI(this.usuarioEditable).subscribe(  (response) => {                           //Next callback
        //alert(response);
        this.showDialog();
        setTimeout(() => this.esconderModalConfirmacion(), 3000);
        setTimeout(() => this.router.navigate(['/clientes']) , 3600);
      },
      (error) => {                              //Error callback
       
        //throw error;   //You can also throw the error to a global error handler
        this.errorMessage = error;
     //console.log(error.error);
     var arrErrors=JSON.parse(error.error);
     
      $("div[id^='div-']").text("");



      for (let i = 0; i < arrErrors.errors.length; i++) {
  $("#div-"+arrErrors.errors[i].field).text(arrErrors.errors[i].defaultMessage);

}

var arrAlert =   $( ".alert" );
arrAlert.each(function( i ) {
      
      if($(this).html()==""){
        $(this).css("display","none");
     
      }else{
        $(this).css("display","block");

      }

    });
  
      });
   
    

 console.log(this.edited);
    }

    display: boolean = false;

showDialog() {

  this.display = true;
 
 
}
 
 esconderModalConfirmacion():void{
  

  this.display = false;
}
}
