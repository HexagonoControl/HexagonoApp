import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';
import { Question } from 'src/app/models/questions';
import { Respuestas } from 'src/app/models/respuestas';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
  isShown: boolean;
  isShown2: boolean;
  isShown3: boolean;
  isShown4: boolean;
  isShown5: boolean;
  isShown6: boolean;
  isShown7: boolean;
  users;
  dat: string[];
  items: MenuItem[] = [];
  respuesta: Respuestas[];
  resp: Respuestas = new Respuestas();
  questions: Question[];
  private datos = [];
  private indicador = [];
  private indicador1 = [];
  private indicador2 = [];
  private indicador3 = [];
  private indicador4 = [];
  private indicador5 = [];
  private indicador6 = [];
  private indicador7 = [];
  public barChartData: ChartDataset[];
  public chartProm;
  isShow: boolean;
  constructor(private router:Router,
    private dataService: AuthService,private database: DatabaseService) {

     

    }

    ngOnInit(): void {
      this.getUser();
      this.getSubcategory1();
      this.getSubcategory2();
      this.getSubcategory3();
      this.getSubcategory4();
      this.getSubcategory5();
      this.getSubcategory6();
      this.getSubcategory7();

      this.items = [
        {label: 'Aspectos generales del control organizacional', icon: 'pi pi-info',routerLink: ['/request'],
        disabled: this.isShown
      },
        {separator:true},
        {label: 'Control Administrativo', icon: 'pi pi-times', command: () => {
           
        }},
        {separator:true},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {separator:true},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];

      
    }
  
 //CIERRE DE SESIÓN
    logout()
    {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
 //   this.router.navigate(["login"]);
    localStorage.clear();
    }


    getUser(){
      var id_user = localStorage.getItem("id_user");
    
    this.database.getUseridD(+id_user)
    .subscribe(data=>{
      this.users=data;
      for (const ind of this.users) {
        this.indicador.push(ind.admin);
           }
      this.cargarDatos(this.datos, this.indicador);
      JSON.stringify(this.indicador);
      if(this.indicador[0] == 1){
       this.isShow = true;
        }else{
        this.isShow = false;
      }
      
  
      });
    }
    cargarDatos(datos, indicador) {
      this.barChartData = [];
     for (const index in datos) {
        this.barChartData.push({ data: datos[index], label: indicador[index] });
       }
    }


    getSubcategory1(){
      var id_user = localStorage.getItem("id_user");
      var id_subcategory = 1;
      this.database.getRespuestasId(id_user,id_subcategory)
     .subscribe(data => {
      this.respuesta = data,
      this.questions = data;
      for (const ind of this.respuesta) {
      this.indicador1.push(ind.realizado);
      }
      this.cargarDatos1(this.datos, this.indicador1);
      if(this.indicador1[0] == 1){
          this.isShown = false;
          }else{
          this.isShown = true;
          }
         });
    }    
    cargarDatos1(datos, indicador1) {
      this.barChartData = [];
      for (const index in datos) {
        this.barChartData.push({ data: datos[index], label: indicador1[index] });
       }
   }

   getSubcategory2(){
    var id_user = localStorage.getItem("id_user");
    var id_subcategory = 2;
    this.database.getRespuestasId(id_user,id_subcategory)
   .subscribe(data => {
    this.respuesta = data,
    this.questions = data;
    for (const ind of this.respuesta) {
    this.indicador2.push(ind.realizado);
    }
    this.cargarDatos2(this.datos, this.indicador2);
    if(this.indicador2[0] == 1){
        this.isShown2 = false;
        }else{
        this.isShown2 = true;
        }
       });
  }    
  cargarDatos2(datos, indicador2) {
    this.barChartData = [];
    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: indicador2[index] });
     }
 }


 getSubcategory3(){
  var id_user = localStorage.getItem("id_user");
  var id_subcategory = 3;
  this.database.getRespuestasId(id_user,id_subcategory)
 .subscribe(data => {
  this.respuesta = data,
  this.questions = data;
  for (const ind of this.respuesta) {
  this.indicador3.push(ind.realizado);
  }
  this.cargarDatos3(this.datos, this.indicador3);
  if(this.indicador3[0] == 1){
      this.isShown3 = false;
      }else{
      this.isShown3 = true;
      }
     });
}    
cargarDatos3(datos, indicador3) {
  this.barChartData = [];
  for (const index in datos) {
    this.barChartData.push({ data: datos[index], label: indicador3[index] });
   }
}


getSubcategory4(){
  var id_user = localStorage.getItem("id_user");
  var id_subcategory = 4;
  this.database.getRespuestasId(id_user,id_subcategory)
 .subscribe(data => {
  this.respuesta = data,
  this.questions = data;
  for (const ind of this.respuesta) {
  this.indicador4.push(ind.realizado);
  }
  this.cargarDatos4(this.datos, this.indicador4);
  if(this.indicador4[0] == 1){
      this.isShown4 = false;
      }else{
      this.isShown4 = true;
      }
     });
}    
cargarDatos4(datos, indicador4) {
  this.barChartData = [];
  for (const index in datos) {
    this.barChartData.push({ data: datos[index], label: indicador4[index] });
   }
}



getSubcategory5(){
  var id_user = localStorage.getItem("id_user");
  var id_subcategory = 5;
  this.database.getRespuestasId(id_user,id_subcategory)
 .subscribe(data => {
  this.respuesta = data,
  this.questions = data;
  for (const ind of this.respuesta) {
  this.indicador5.push(ind.realizado);
  }
  this.cargarDatos5(this.datos, this.indicador5);
  if(this.indicador5[0] == 1){
      this.isShown5 = false;
      }else{
      this.isShown5 = true;
      }
     });
}    
cargarDatos5(datos, indicador5) {
  this.barChartData = [];
  for (const index in datos) {
    this.barChartData.push({ data: datos[index], label: indicador5[index] });
   }
}


getSubcategory6(){
  var id_user = localStorage.getItem("id_user");
  var id_subcategory = 6;
  this.database.getRespuestasId(id_user,id_subcategory)
 .subscribe(data => {
  this.respuesta = data,
  this.questions = data;
  for (const ind of this.respuesta) {
  this.indicador6.push(ind.realizado);
  }
  this.cargarDatos6(this.datos, this.indicador6);
  if(this.indicador6[0] == 1){
      this.isShown6 = false;
      }else{
      this.isShown6 = true;
      }
     });
}    
cargarDatos6(datos, indicador6) {
  this.barChartData = [];
  for (const index in datos) {
    this.barChartData.push({ data: datos[index], label: indicador6[index] });
   }
}



getSubcategory7(){
  var id_user = localStorage.getItem("id_user");
  var id_subcategory = 7;
  this.database.getRespuestasId(id_user,id_subcategory)
 .subscribe(data => {
  this.respuesta = data,
  this.questions = data;
  for (const ind of this.respuesta) {
  this.indicador7.push(ind.realizado);
  }
  this.cargarDatos7(this.datos, this.indicador7);
  if(this.indicador7[0] == 1){
      this.isShown7 = false;
      }else{
      this.isShown7 = true;
      }
     });
}    
cargarDatos7(datos, indicador7) {
  this.barChartData = [];
  for (const index in datos) {
    this.barChartData.push({ data: datos[index], label: indicador7[index] });
   }
}


btnClick() {
//  this.router.navigateByUrl('#/request');
  console.log("salir");
  
}


  }