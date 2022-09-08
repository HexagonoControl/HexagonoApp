import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {FieldsetModule} from 'primeng/fieldset';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MenubarModule} from 'primeng/menubar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AccordionModule } from 'primeng/accordion';
import {TableModule} from 'primeng/table';
//import { MessageService } from 'primeng/api';
import {SelectButtonModule} from 'primeng/selectbutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ChartModule} from 'primeng/chart';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    FieldsetModule,
    ScrollPanelModule,
    MenubarModule,
    CascadeSelectModule,
    AccordionModule,
    TableModule,
    SelectButtonModule,
    CardModule,
    ChartModule,
    ConfirmDialogModule,
    MessagesModule
  ]
})
export class PrimeNgModule { }
