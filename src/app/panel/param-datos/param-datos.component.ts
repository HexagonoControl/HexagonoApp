import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DatabaseService } from 'src/app/service/database.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { getLocaleTimeFormat } from '@angular/common';
import { __values } from 'tslib';

import { Question } from '../../models/questions';
import { subCategory } from '../../models/subCategory';

@Component({
  selector: 'app-param-datos',
  templateUrl: './param-datos.component.html',
  styleUrls: ['./param-datos.component.css']
})


export class ParamDatosComponent implements OnInit {

  subcategory: subCategory[];
  errorMessage: string = '';
  successMessage: string = '';
  selectedq: subCategory = {id_subcategory: 3, subcategory_name: '', active: true};
  question: Question = new Question();
  //question: Question = new Question();
  validation_messages = {
    'pregunta': [
      { type: 'required', message: 'Debe escribir una pregunta.' },
    ],
    'selectedq': [
      { type: 'required', message: 'La Subcategoría es requerida.' },
    ]
  };

  constructor( private database: DatabaseService, 
    private router: Router, private dataService: AuthService){}

  ngOnInit(): void {
    this.getSubcategory();
 
  }


//Método de registrar las preguntas nuevas
  regisPregunta(question: Question){
    this.question.id_subcategory
   var respuesta =  Object.assign(this.question,this.question.id_subcategory);
    this.database.questionRegister(respuesta)
    .subscribe(data=>{
     alert("Se Agrego con Exito...!!!");
    //  this.router.navigate(["param-datos"]);
    window.location.reload()
    })
  }

//Método de obtener las subcategorías
  getSubcategory(){
    this.database.getSubcategory()
   .subscribe(data => {
     this.subcategory = data;
   
     
   });
  }

  logout(){
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    this.router.navigate(["login"]);
    }
   


}
