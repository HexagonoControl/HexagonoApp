import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/questions';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/service/auth.service';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-request4',
  templateUrl: './request4.component.html',
  styleUrls: ['./request4.component.css']
})
export class Request4Component implements OnInit {
  quests: Question[];
  quest: Question = new Question();
  stateOptions: any[];
  value1: string = 'off';
  value2: number;
  value3: any;
  users :Users= new Users();
  constructor(private database: DatabaseService, private router:Router, private authService: AuthService) { 
    this.stateOptions = [{label: 'SÍ', value: '1'}, {label: 'SI PARCIAL', value: '2'},
    {label: 'NO', value: '3'}, {label: 'NO APLICA', value: '0'}];

  }

  ngOnInit(): void {
    this.ViewWillEnter();
  }


  ViewWillEnter() {

    this.database.getQuestion4().subscribe(data => this.quests = data);
    let id_user=localStorage.getItem("id_user");
    this.database.getUserid(+id_user).subscribe(data=>this.users= data);

  }
  regisPregunta(quest: Question){
    this.quests;
    var respuesta =  JSON.stringify(this.quests);
    var id_user = localStorage.getItem("id_user");
    this.database.requestRegister1(respuesta,id_user)
    .subscribe(data=>{
    alert("Se Agregó con Éxito...!!!");
   
    this.router.navigate(['request5']);
    })


  }


}