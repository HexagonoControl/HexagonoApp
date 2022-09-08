import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
  //  CdkVirtualScrollViewport
  ],
 // schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Must add this one.

  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }
