import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DatabaseService } from 'src/app/service/database.service';

import { Question } from '../../models/questions';
import { Respuestas } from '../../models/respuestas';
import { Users } from '../../models/users';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  quest: Question = new Question();
  quests: Question[];
  public respuesta: Respuestas[];
  respuestas: Respuestas[];
  stateOptions: any[];
  value1: string = 'off';
  value2: number;
  value3: any;
  users :Users= new Users();
  isShown: boolean;
  options: string;
  observacion:string;
  constructor(private database: DatabaseService, private router:Router, private authService: AuthService) { 
    let quests=JSON.parse(localStorage.getItem("quests"));
    this.quests = quests;
    this.stateOptions = [{label: 'SI', value: '1'}, {label: 'SI PARCIAL', value: '2'},
    {label: 'NO', value: '3'}, {label: 'NO APLICA', value: '0'}];
    
    
    this.observacion = "null";
    this.options = "null";
 
 
  }
  ngOnInit(): void {
  this.ViewWillEnter();
  this.isShown = false;
  }

  ViewWillEnter() {

    this.database.getQuestion1().subscribe(data => this.quests = data);
    let id_user=localStorage.getItem("id_user");
    this.database.getUserid(+id_user).subscribe(data=>this.users= data);

  }

  //Registrar respuesta de primera subcategoría
  regisPregunta(quest: Question){
    this.quests;
    var respuesta =  JSON.stringify(this.quests);
    var id_user = localStorage.getItem("id_user");
    this.database.requestRegister(respuesta,id_user)
    .subscribe(data=>{
    alert("Se Agrego con Exito...!!!");

    this.router.navigate(['request2']);
    })

  
  }

  
  verRespuesta(){
    let id=localStorage.getItem("id_user");
    this.database.getRequest1(+id)
    .subscribe(data => {
      this.respuestas = data;
    
    });
  }

  private initDefault(){
    let quests=JSON.parse(localStorage.getItem("quests"));
    let observacion = localStorage.getItem("observacion");
    this.quests = quests;
    
  //    localStorage.removeItem('observacion');
      
  }


}
