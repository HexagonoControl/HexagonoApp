import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/indicador';
import { Question } from 'src/app/models/questions';
import { subCategory } from 'src/app/models/subCategory';
import { DatabaseService } from 'src/app/service/database.service';
import { Respuestas } from '../../../models/respuestas';

@Component({
  selector: 'app-respuestas-usuario',
  templateUrl: './respuestas-usuario.component.html',
  styleUrls: ['./respuestas-usuario.component.css']
})

//RESPUESTAS INDIVIDUALES DE USUARIOS.
export class RespuestasUsuarioComponent implements OnInit {
  respuesta: Respuestas[];
  questions: Question[];
  indic: Indicador[];

  subCategorys: subCategory[];
  resultado1: number;
  constructor(private database: DatabaseService) {
  
    
   }

  ngOnInit(): void {
    this.ViewWillEnter();
    this.getIndicador();

  }

  
  ViewWillEnter(){
    var id_user = localStorage.getItem("id_user");
    var id_subcategory = localStorage.getItem("id_sub");
    this.database.getRespuestasId(id_user,id_subcategory)
   .subscribe(data => {
    this.respuesta = data,
    this.questions = data;
    return this.respuesta;
       });

  }

  getIndicador(){
    var id_user = localStorage.getItem("id_user");
    var id_subcategory = localStorage.getItem("id_sub");
    this.database.getIndicador1(id_user,id_subcategory)
    .subscribe(data =>{
    this.indic = data;
    return this.indic;
   
   });
  }

}
