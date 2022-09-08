import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/questions';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/service/auth.service';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-request5',
  templateUrl: './request5.component.html',
  styleUrls: ['./request5.component.css']
})
export class Request5Component implements OnInit {
  quests: Question[];
  quest: Question = new Question();
  stateOptions: any[];
  value1: string = 'off';
  value2: number;
  value3: any;
  users :Users= new Users();
  constructor(private database: DatabaseService, private router:Router, private authService: AuthService) { 
    this.stateOptions = [{label: 'SI', value: '1'}, {label: 'SI PARCIAL', value: '2'},
    {label: 'NO', value: '3'}, {label: 'NO APLICA', value: '0'}];

  }

  ngOnInit(): void {
    this.ViewWillEnter();
  }


  ViewWillEnter() {

    this.database.getQuestion5().subscribe(data => this.quests = data);
    let id_user=localStorage.getItem("id_user");
    this.database.getUserid(+id_user).subscribe(data=>this.users= data);

  }
  regisPregunta(quest: Question){
    this.quests;
    var respuesta =  JSON.stringify(this.quests);
    var id_user = localStorage.getItem("id_user");
    this.database.requestRegister1(respuesta,id_user)
    .subscribe(data=>{
    alert("Se Agrego con Exito...!!!");

    this.router.navigate(['request6']);
    })

  }


}