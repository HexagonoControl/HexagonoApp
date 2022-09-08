import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { Users } from '../../models/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  user: Users[];
  constructor(private database: DatabaseService,private router: Router) { }

  ngOnInit(): void {
    this.ViewWillEnter();
  }


  ViewWillEnter() {

    this.database.getUsersAll().subscribe(data => this.user = data);
 
    }
//ENVÍO DE DATOS PARA OBETNER REPORTES
    VerReportes(user:Users):void{
      localStorage.setItem("id_user", user.id_user.toString());
      this.router.navigate(["/panel-control/medicion"]);
    }

}
