import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { DatabaseService } from 'src/app/service/database.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {

  dat: string[];
  private datos = [];
  private id_user = [];
  users;
  public chartProm;
  constructor(private database: DatabaseService, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    var id_user = localStorage.getItem("id_user");
  
  this.database.getUseridD(+id_user)
  .subscribe(data=>{
    this.users=data;
    console.log(this.users);
   
    });
  }
}
