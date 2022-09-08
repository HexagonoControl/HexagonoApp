import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { PanelControlComponent } from './panel/panel-control/panel-control.component';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ParamDatosComponent } from './panel/param-datos/param-datos.component';
import { TablaDatosComponent } from './panel/tabla-datos/tabla-datos.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RequestComponent } from './questions/request/request.component';
import { Request7Component } from './questions/request7/request7.component';
import { Request6Component } from './questions/request6/request6.component';
import { Request2Component } from './questions/request2/request2.component';
import { Request3Component } from './questions/request3/request3.component';
import { Request4Component } from './questions/request4/request4.component';
import { Request5Component } from './questions/request5/request5.component';
import { MedicionComponent } from './panel/medicion/medicion.component';
import { ControlAdministrativoComponent } from './panel/diagnosticoGeneral/control-administrativo/control-administrativo.component';
import { ControlContableComponent } from './panel/diagnosticoGeneral/control-contable/control-contable.component';
import { ControlOperacionalComponent } from './panel/diagnosticoGeneral/control-operacional/control-operacional.component';
import { DiagnosticoGeneralComponent } from './panel/diagnosticoGeneral/diagnostico-general/diagnostico-general.component';

import { RiesgosSocialesComponent } from './panel/diagnosticoGeneral/riesgos-sociales/riesgos-sociales.component';
import { RiesgosTecnologicosComponent } from './panel/diagnosticoGeneral/riesgos-tecnologicos/riesgos-tecnologicos.component';
import { RespuestasUsuarioComponent } from './panel/respuestasUnique/respuestas-usuario/respuestas-usuario.component';
import { IntroduccionComponent } from './panel/introduccion/introduccion.component';
import { ReportesComponent } from './panel/reportes/reportes.component';
import { RiesgosAmbientalesComponent } from './panel/diagnosticoGeneral/riesgos-ambientales/riesgos-ambientales.component';
import { CalificacionTotalComponent } from './panel/diagnosticoGeneral/calificacion-total/calificacion-total.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PanelControlComponent,
    ParamDatosComponent,
    TablaDatosComponent,
    MedicionComponent,
    RequestComponent,
    Request2Component,
    Request3Component,
    Request4Component,
    Request5Component,
    Request6Component,
    Request7Component,
    RespuestasUsuarioComponent,
    DiagnosticoGeneralComponent,    
    ControlOperacionalComponent,
       ControlAdministrativoComponent,
       ControlContableComponent,
       RiesgosAmbientalesComponent,
       RiesgosSocialesComponent,
       RiesgosTecnologicosComponent,
       IntroduccionComponent,
       ReportesComponent,
       CalificacionTotalComponent,
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    PrimeNgModule,
    ButtonModule,
    CascadeSelectModule,
    //CdkVirtualScrollViewport,
    ScrollPanelModule,
    ScrollingModule,
    SelectButtonModule,
    SwiperModule,
    NgbModule,
    ConfirmDialogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Must add this one.

  providers: [ConfirmationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
