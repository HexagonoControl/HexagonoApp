import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificacion-total',
  templateUrl: './calificacion-total.component.html',
  styleUrls: ['./calificacion-total.component.css']
})
export class CalificacionTotalComponent implements OnInit {
  basicData: any;
  horizontalOptions: any;
  prom1: string;
  prom2: string;
  prom3: string;
  prom4: string;
  prom5: string;
  prom6: string;
  constructor() { }

  ngOnInit(): void {
    this.ViewWillEnter();
    this.basicData = {
      labels: ['1. PROMEDIO CONTROL ADMINISTRATIVO','2. PROMEDIO CONTROL OPERACIONAL','3. PROMEDIO CONTROL CONTABLE'
      ,'4. PROMEDIO RIESGOS AMBIENTALES','5. PROMEDIO RIESGOS SOCIALES','6. PROMEDIO RIESGOS TECNOLÓGICOS'],
      datasets: [
          {
              label: 'Calificación Total Control Organizacional MCIP',
              backgroundColor: '#42A5F5',
              data: [this.prom1,this.prom2,this.prom3,this.prom4,this.prom5,this.prom6],
              
          }
      ]
  };
  this.horizontalOptions = {
    display: false,
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};
  }

  ViewWillEnter(){
    this.prom1 = localStorage.getItem("prom1");
    this.prom2 = localStorage.getItem("prom2");
    this.prom3 = localStorage.getItem("prom3");
    this.prom4 = localStorage.getItem("prom4");
    this.prom5 = localStorage.getItem("prom5");
    this.prom6 = localStorage.getItem("prom6");
  }

}
