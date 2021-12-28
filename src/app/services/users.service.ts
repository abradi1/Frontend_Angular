import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/users.model';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 //apiUrl = "http://localhost:3000/api/updateuser";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Users[]>('http://localhost:3000/api/findalluser');
  }

  create(data:any){
    return this.http.post<Users>('http://localhost:3000/api/user',data);
  }

<<<<<<< HEAD
  delete(id:any) {
    return this.http.delete('http://localhost:3000/api/deleteuser',id);
 }

  /*update(utilisateur:any){
    return this.http.put(`${this.apiUrl}/${utilisateur.id}`,utilisateur);
  
}*/
update(utilisateur:any){
  return this.http.put('http://localhost:3000/api/updateuser',utilisateur);
}
=======
  delete(id:any){
    return this.http.delete('http://localhost:3000/api/deleteuser',id);
  }
>>>>>>> 95810edf222ac4c9aa351681c7fb93f8cebca5fb
}
