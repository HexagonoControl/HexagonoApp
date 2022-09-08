import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';
import { Question } from 'src/app/models/questions';
import { Respuestas } from 'src/app/models/respuestas';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
  isShown: boolean;
  items: MenuItem[] = [];
  respuesta: Respuestas[];
  resp: Respuestas = new Respuestas();
  questions: Question[];
  constructor(private router:Router,
    private dataService: AuthService,private database: DatabaseService) {

     

    }

    ngOnInit(): void {
 
      if(this.resp.realizado==1){

        this.isShown = false;
        }else{
        this.isShown = true;
      }
      
    }
  
    /*
    ViewWillEnter(){
      var id_user = localStorage.getItem("id_user");
      console.log(id_user);
      var id_subcategory = localStorage.getItem("id_sub");
      console.log(id_subcategory);
      this.database.getRespuestasId(id_user,id_subcategory)
     .subscribe(data => {
      this.respuesta = data,
      this.questions = data;
console.log(this.respuesta);

         });
  
    }*/
 //CIERRE DE SESIÓN
    logout()
    {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
 //   this.router.navigate(["login"]);
    localStorage.clear();
    }

  }