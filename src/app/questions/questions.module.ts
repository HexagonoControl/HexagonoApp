import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PaginatorModule } from 'primeng/paginator';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PaginatorModule,
    SelectButtonModule,
    FormsModule

  ],
  exports:[

  ]
})
export class QuestionsModule { }
