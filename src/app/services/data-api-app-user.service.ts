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
  let headers = new HttpHeaders()
  headers .set('Content-type', 'application/json')
  
  return  this.http.post(url_api, usuario , { 'headers':headers , responseType: 'text'});

}

modifyUsuarioAPI(usuario: Usuarios){
  var url_api ="http://localhost:8080/users";

  let headers = new HttpHeaders()
  headers .set('Content-type', 'application/json')
  headers .set('Access-Control-Allow-Origin', '*')

console.log(JSON.stringify(usuario));
console.log(usuario);
 return this.http.put(url_api, usuario,{'headers':headers , responseType: 'text'});



}

deleteUserByDni(dni:string ){
  var url_api ="http://localhost:8080/users";
  var url_api2 ="http://localhost:8080/users?eliminarDNI="+dni;

 return this.http.get(url_api2, {responseType: 'text'});




}

}