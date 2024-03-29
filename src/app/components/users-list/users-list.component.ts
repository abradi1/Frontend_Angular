import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {Users} from 'src/app/models/users.model';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  
  // On déclare ici un objet de type Users qui va nous permettre de faire 
  //la liaison entre modele et la view afin de récuperer les données entrer par l'utilisateur 
  // et pouvoir creer un utilisateur
 data : Users = {
   firstname:'',
   lastname:''
 };
 users: Users[] = [];
 condition=false;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

getAllUsers(): void{
  this.usersService.getAll()
  .subscribe(data => {
    this.users = data;
    console.log(data);
});
}

createUser() {
  this.usersService.create(this.data)
  .subscribe((donnee) => {
    this.users = [donnee, ...this.users]
  });
}

/*deleteUser(id:any){
  this.usersService.delete(id)
  .subscribe(() => {
    this.users = this.users.filter
    (user => user.id != id)
  })
}*/
deleteUser(id:any){

  const options = {
     headers: new HttpHeaders({
        'Content-Type': 'application/json',
     }),
     body: {
        id: id
     },
  };

  this.usersService.delete(options)
  .subscribe(() => {
     this.users = this.users.filter
     (user => user.id != id)
   })
}

  updateUser(donnee:any){
    this.data = donnee;
    this.condition=true;
  }

  videInput(){
    this.data = {
      firstname:'',
      lastname:''
    }
  }

  updateUsers() : void{
    const headers = new Headers({'Content-Type': 'application/json'});

    this.usersService.update(this.data)
    .subscribe(commande => {
      this.videInput();
      this.condition=false;
    })
  }

  



}


