import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
 import {Usuarios} from "../interfaces/usuarios";
 import {HttpParams} from  "@angular/common/http";
 @Injectable({
  providedIn: 'root'
})
export class DataApiAppUserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {

    var url_api ="http://localhost:8080/users";
   return  this.http.get(url_api);
  
    
  }
  getAllUsersByDNI(dni: string  ) {

    var url_api ="http://localhost:8080/users?busqueda=" + dni;
    console.log(url_api);
   return  this.http.get(url_api);
  
    
  }
 
  saveUsuarioAPI(usuario: Usuarios){
  var url_api ="http://localhost:8080/users";
  let headers = new HttpHeaders();
 // headers = headers.set('Content-Type', 'application; charset=utf-8');
  
  return  this.http.post(url_api, usuario);

}

deleteUserByDni(dni:string ){
  var url_api ="http://localhost:8080/users";
  var url_api2 ="http://localhost:8080/users?eliminarDNI="+dni;

 return this.http.get(url_api2, {responseType: 'text'});




}

}