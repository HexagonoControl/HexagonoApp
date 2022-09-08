import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  validations_form: UntypedFormGroup;

  constructor(private authService: AuthService, 
    private router: Router, private formBuilder: UntypedFormBuilder) { 

    
  }

  ngOnInit(): void {
    this.ViewWillLoad()
  }



//VALIDADOR DE MAIL Y CONTRASEÑA
  ViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      email: new UntypedFormControl('', Validators.compose([
        Validators.required, Validators.email, Validators.email
      ])),
      password: new UntypedFormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
//INGRESO Y AUTENTICACIÓN DE USUARIO
  Ingresar(validations_form) {
    this.authService.userlogin(validations_form.value.email,validations_form.value.password)
    .pipe(first())
    .subscribe(
    data => {
    const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'introduccion';
    this.router.navigate([redirect]);
    },
    error => {
    alert("Usuario y contraseña incorrectos")
    });
    }
    get email() { return this.validations_form.get('email'); }
    get password() { return this.validations_form.get('password'); }
    
  


}
