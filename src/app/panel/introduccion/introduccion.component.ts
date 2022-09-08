import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { DatabaseService } from 'src/app/service/database.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {

  dat: string[];
  private datos = [];
  private id_user = [];
  public chartProm;
  constructor(private database: DatabaseService, private authService: AuthService) { }
  
  ngOnInit(): void {
   // this.getUser();
  }

/*
  getUser(){
    var id_user = localStorage.getItem("id_user");
  
  this.database.getUseridD(+id_user)
  .subscribe(data=>{
    this.users=data;
    console.log(this.users);
    for (const ind of this.users) {
      this.dat = ind.razon.split(',');
      console.log(this.dat);
      
      this.datos.push(this.dat);
      console.log(this.datos);
      this.id_user.push(ind.id_user);
  
    }
    this.cargarDatos(this.datos, this.id_user);
   console.log(this.datos, this.id_user);
   id_user= JSON.stringify(this.id_user);
   localStorage.setItem('id_user', id_user);
   });
  }
  
  cargarDatos(datos, id_user) {
    this.chartProm = [];

    
    for (const index in datos) {
      this.chartProm.push({ data: datos[index], label: id_user[index] });
   
    }

  }
  */
  get users() {
    return this.authService.users.id_user;
    
  }



  }
  



