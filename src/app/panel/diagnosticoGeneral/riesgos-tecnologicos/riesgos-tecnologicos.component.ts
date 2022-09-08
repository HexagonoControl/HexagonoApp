import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { Indicador } from 'src/app/models/indicador';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-riesgos-tecnologicos',
  templateUrl: './riesgos-tecnologicos.component.html',
  styleUrls: ['./riesgos-tecnologicos.component.css']
})
export class RiesgosTecnologicosComponent implements OnInit {
  indic: Indicador[];
  basicData: any;
  horizontalOptions: any;
  private dato: string;
  private datos = [];
  dat: string[];
  private indicador = [];
  private promedio = [];
  public barChartData: ChartDataset[];
  public chartProm;
  // CREAR GRÁFICA DE RIESGOS TECNOLÓGICOS
  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getDiagnostico6();

    this.basicData = {
      labels: this.indicador,
      datasets: [
          {
              label: 'Riesgos Tecnológicos',
              backgroundColor: '#42A5F5',
              data: this.promedio
          }
      ]
  };
  this.horizontalOptions = {
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



  getDiagnostico6(){
    var id_user = localStorage.getItem("id_user");
    this.database.getDiagnostico6(id_user)
    .subscribe(data =>{
    this.indic = data;
    console.log(this.indic);
    for (const ind of this.indic) {
      this.dat = ind.nombre_indicador.split(',');
       this.datos.push(this.dat);
       this.indicador.push(ind.nombre_indicador);
      this.promedio.push(ind.options);
    }
    this.cargarDatos(this.datos, this.indicador, this.promedio);
    });
  }
  
  cargarDatos(datos, indicador, promedio) {
    this.barChartData = [];
    this.chartProm = [];
    
    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: indicador[index] });
      this.chartProm.push({data: datos[index], label: promedio[index]});
    }

  }
}