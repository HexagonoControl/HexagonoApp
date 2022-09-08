import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/indicador';
import { DatabaseService } from 'src/app/service/database.service';
import { __values } from 'tslib';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { subCategory } from '../../../models/subCategory';
import { Respuestas } from 'src/app/models/respuestas';
import { Users } from 'src/app/models/users';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-diagnostico-general',
  templateUrl: './diagnostico-general.component.html',
  styleUrls: ['./diagnostico-general.component.css']
})
export class DiagnosticoGeneralComponent implements OnInit {
  indicador1: Indicador[];
  indicador2: Indicador[];
  indicador3: Indicador[];
  indicador4: Indicador[];
  indicador5: Indicador[];
  indicador6: Indicador[];
  resp: Respuestas[];
  total1:number;
  total2:number;
  total3:number;
  total4:number;
  total5:number;
  total6:number;
  totalcalif:number;
  calificacion:string;
  users: Users[];
  dat: string[];
  avg1: number;
  avg2: number;
  avg3: number;
  avg4: number;
  avg5: number;
  avg6: number;
  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getDiagnostico1();
    this.getDiagnostico2();
    this.getDiagnostico3();
    this.getDiagnostico4();
    this.getDiagnostico5();
    this.getDiagnostico6();
    this.getSumatotal();
    this.getUser();
    
  }
// OBTIENE EL PROMEDIO DEL INDICADOR 1
  getDiagnostico1(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico1(id_user)
    .subscribe(data =>{
    this.indicador1 = data;
   this.total1 = this.indicador1.reduce((
      acc,
      obj,
    ) => acc=+obj.totalprom,0);
   this.avg1 = this.total1/this.indicador1.length;
    localStorage.setItem("prom1", this.avg1.toString());
   });
   //
  }
// OBTIENE EL PROMEDIO DEL INDICADOR 2
  getDiagnostico2(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico2(id_user)
    .subscribe(data =>{
    this.indicador2 = data;
    this.total2 = this.indicador2.reduce((
      acc,
      obj,
    ) => acc=+obj.totalprom,0);
    this.avg2 = this.total2/this.indicador2.length;
    localStorage.setItem("prom2", this.avg2.toString());
    });
  }
// OBTIENE EL PROMEDIO DEL INDICADOR 3
  getDiagnostico3(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico3(id_user)
    .subscribe(data =>{
    this.indicador3 = data;
    this.total3 = this.indicador3.reduce((
      acc,
      obj,
    ) => acc=+obj.totalprom,0);
    this.avg3 = this.total3/this.indicador3.length;
    localStorage.setItem("prom3", this.avg3.toString());
    });
  }
  // OBTIENE EL PROMEDIO DEL INDICADOR 4
  getDiagnostico4(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico4(id_user)
    .subscribe(data =>{
    this.indicador4 = data;
    this.total4 = this.indicador4.reduce((
      acc,
      obj,
    ) => acc=+obj.totalprom,0);
    this.avg4 = this.total4/this.indicador4.length;
    localStorage.setItem("prom4", this.avg4.toString());
    });
  }
// OBTIENE EL PROMEDIO DEL INDICADOR 5
  getDiagnostico5(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico5(id_user)
    .subscribe(data =>{
    this.indicador5 = data;
    this.total5 = this.indicador5.reduce((
      acc,
      obj,
    ) => acc=+obj.totalprom,0);
    this.avg5 = this.total5/this.indicador5.length;
    localStorage.setItem("prom5", this.avg5.toString());
    });
  }

  // OBTIENE EL PROMEDIO DEL INDICADOR 6
  getDiagnostico6(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico6(id_user)
    .subscribe(data =>{
    this.indicador6 = data;
    this.total6 = this.indicador6.reduce((
      acc,
      obj,
    ) => acc=+obj.totalprom,0);
    this.avg6 = this.total6/this.indicador6.length;
    localStorage.setItem("prom6", this.avg6.toString());
    });
  }


  //SUMAR CALIFICACIONES PARA CLAISIFICARLAS EN TABLA
  getSumatotal(){
    var id_user = localStorage.getItem("id_user");
    this.database.getSumatotal(id_user)
    .subscribe(data =>
      {
        this.resp = data;
        (this.resp);
this.totalcalif = this.resp.reduce((
  acc,
  obj,
) => acc=+obj.options,0);
if(this.totalcalif>0 && this.totalcalif<=100){
  this.calificacion = "Efectivo";
      }
  else if (this.totalcalif>100 && this.totalcalif<=200){
    this.calificacion = "Parcialmente confiable con debilidades";
  }    
  else if(this.total5>200){
    this.calificacion = "No confiable";
  }
    });
  }

  //METODO DE OBTENER USUARIO DE LA BASE DE DATOS
getUser(){
  var id_user = localStorage.getItem("id_user");
this.database.getUseridD(id_user)
.subscribe(data=>{
  this.users=data;
  
});
}




public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 190;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a2');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
   // PDF.addPage('p', 'mm', 'letter')
    PDF.save('diagnostico-general.pdf');
  });
}

}
