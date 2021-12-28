import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  url_logo_user:string="assets/images/logo_user.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
