import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { subCategory } from '../../models/subCategory';
import { Respuestas } from '../../models/respuestas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.component.html',
  styleUrls: ['./medicion.component.css']
})
export class MedicionComponent implements OnInit {
  subCategorys: subCategory[];
  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.ViewWillEnter();
  }



  
  ViewWillEnter() {

    this.database.getSubcategory().subscribe(data => this.subCategorys = data);
 
    }

//ENVIO DE ID DE SUBCATEGORIA
    VerRespuestas(subcategory:subCategory):void{
      localStorage.setItem("id_sub", subcategory.id_subcategory.toString());
      this.router.navigate(["respuestas-usuario"]);
    }
//METODO PARA IR ATRÁS
atras(){
  localStorage.removeItem('id_user');
  this.router.navigate(["introduccion"]);

}



}
