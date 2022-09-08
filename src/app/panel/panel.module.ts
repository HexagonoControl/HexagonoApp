import { NgModule,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MedicionComponent } from './medicion/medicion.component';
import { ParamDatosComponent } from './param-datos/param-datos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelControlComponent } from './panel-control/panel-control.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';
import {AccordionModule} from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    
  
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CascadeSelectModule,
    AccordionModule,
    MenubarModule,
    TableModule,
  //  MessageService
  ],
  exports:[
  //  ParamDatosComponent,
 //   PanelControlComponent,
  //  TablaDatosComponent,
    
  ],

})
export class PanelModule { }
