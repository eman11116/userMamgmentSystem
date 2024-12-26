import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(    private _AuthService: AuthService ,private _Router: Router ){}
  loginForm:FormGroup=new FormGroup({
    'username':new FormControl('',[Validators.required, 
    Validators.minLength(2),  
    Validators.maxLength(10),  
  
    ]),
    'password':new FormControl('',[Validators.required, Validators.minLength(6) ]),
  
  })


  submit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this._AuthService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this._Router.navigate(['home'])
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
    }
  }

