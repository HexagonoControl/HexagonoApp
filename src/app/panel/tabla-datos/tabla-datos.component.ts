import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/questions';
import { DatabaseService } from 'src/app/service/database.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {
  quests: Question[];
  question: Question;
  productDialog: boolean;
  
  submitted: boolean;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.ViewWillEnter();

  }

  ViewWillEnter() {

  this.database.getQuestion().subscribe(data => this.quests = data);

  }


  
  trackByFn(index, quest) {
    return quest.uid; // or item.id
  }
//INACTIVAR PREGUNTAS.
  editQuestion(quest: Question) {
    if (quest.active == true){
      quest.active = false;
       var respuesta = quest;
      this.database.updateQuestion(respuesta).subscribe(data=>{
        alert("Se Actualizado con Exito...!!!");
        window.location.reload()
      });
    }
    else if(quest.active == false){
      quest.active = true;
      var respuesta = quest;
     this.database.updateQuestion(respuesta).subscribe(data=>{
        alert("Se Actualizado con Exito...!!!");
        window.location.reload()
      });
    }
  
  }


}
