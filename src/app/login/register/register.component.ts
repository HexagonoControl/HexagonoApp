import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DatabaseService } from 'src/app/service/database.service';
import { Validators, UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { first } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validations_form: UntypedFormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  
 validation_messages = {
  'email': [
    { type: 'required', message: 'Correo electrónico requerido.' },
    { type: 'pattern', message: 'Ingresa un correo electrónico válido.' }
  ],
  'password': [
    { type: 'required', message: 'La contraseña es requerida.' },
    { type: 'minlength', message: 'La contraseña debe ser mayor a 5 caracteres.' }
  ]
};

  constructor(private dataService: AuthService, private database: DatabaseService, 
    private router: Router,     private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

this.ViewWillLoad();
  }



//VALIDADOR DE DATOS
  ViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      email: new UntypedFormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new UntypedFormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      nit: new UntypedFormControl('', Validators.required),
      razon: new UntypedFormControl('', Validators.required),
      repres: new UntypedFormControl('', Validators.required),
      ciiu: new UntypedFormControl('', Validators.required),
      country: new UntypedFormControl(''),
      dpto: new UntypedFormControl(''),
      city: new UntypedFormControl(''),
      terminos: new UntypedFormControl('', Validators.required),
      admin: new UntypedFormControl('0'),
      fecha: new UntypedFormControl(Date())
    });
  }
// REGISTRO DE USUARIOS A LA APLICACIÓN
  registrarse(angForm1){
      this.dataService.userregistration(angForm1.value.email,
        angForm1.value.password, angForm1.value.nit,angForm1.value.razon,angForm1.value.repres,
        angForm1.value.ciiu,angForm1.value.country,angForm1.value.dpto,angForm1.value.city,
        angForm1.value.terminos,angForm1.value.admin)
      .pipe(first())
      .subscribe(
        
      data => {
        alert("Usuario registrado...!!!");
      this.router.navigate(['introduccion']);
      },
      
      error => {
      });
      }

   
      get email() { return this.validations_form.get('email'); }
      get password() { return this.validations_form.get('password'); }
      
      }