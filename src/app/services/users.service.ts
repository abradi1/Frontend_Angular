import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urldelete = 'http://localhost:3000/api/deleteuser';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Users[]>('http://localhost:3000/api/findalluser');
  }

  create(data:any){
    return this.http.post<Users>('http://localhost:3000/api/user',data);
  }

  delete(id:any){
    return this.http.delete(`${this.urldelete}/${id}`);
  }
}
