import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PanelControlComponent } from './panel/panel-control/panel-control.component';
import { ParamDatosComponent } from './panel/param-datos/param-datos.component';
import { AuthguardGuard } from './service/authguard.guard';
import { RequestComponent } from './questions/request/request.component';
import { Request2Component } from './questions/request2/request2.component';
import { Request3Component } from './questions/request3/request3.component';
import { Request4Component } from './questions/request4/request4.component';
import { Request5Component } from './questions/request5/request5.component';
import { Request6Component } from './questions/request6/request6.component';
import { Request7Component } from './questions/request7/request7.component';
import { MedicionComponent } from './panel/medicion/medicion.component';
import { RespuestasUsuarioComponent } from './panel/respuestasUnique/respuestas-usuario/respuestas-usuario.component';
import { DiagnosticoGeneralComponent } from './panel/diagnosticoGeneral/diagnostico-general/diagnostico-general.component';
import { IntroduccionComponent } from './panel/introduccion/introduccion.component';
import { ReportesComponent } from './panel/reportes/reportes.component';
const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
},
  {
    path: 'panel-control', 
    component: PanelControlComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'introduccion',
    component: IntroduccionComponent
  },
   {
    path: 'panel-control/param-datos',
    component: ParamDatosComponent
  },
  {
    path: 'panel-control/medicion',
    component: MedicionComponent
  },
  {
    path: 'respuestas-usuario',
    component: RespuestasUsuarioComponent
  },
  
  {
    path: 'diagnostico-general',
    component: DiagnosticoGeneralComponent
  }
  ,
  {
    path: 'request',
    component: RequestComponent
  }
  ,
  {
    path: 'request2',
    component: Request2Component
  }
  ,
  {
    path: 'request3',
    component: Request3Component
  }
  ,
  {
    path: 'request4',
    component: Request4Component
  }
  ,
  {
    path: 'request5',
    component: Request5Component
  }
  ,
  {
    path: 'request6',
    component: Request6Component
  }
  ,
  {
    path: 'request7',
    component: Request7Component
  }
  ,
  {
    path: 'reportes',
    component: ReportesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
