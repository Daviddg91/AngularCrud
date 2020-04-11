import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
 

@Injectable({
  providedIn: 'root'
})
export class DataApiAppUserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {

    var url_api ="http://localhost:8080/users";
   return  this.http.get(url_api);
  
    
  }


}
