import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import {AcceuilComponent} from './components/acceuil/acceuil.component';

const routes: Routes = [
  {path: '', component:AcceuilComponent},
  { path: 'users', component: UsersListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
