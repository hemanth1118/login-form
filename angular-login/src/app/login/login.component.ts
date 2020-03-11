import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  isSubmitted  =  false;
  
  //  email2 : string
  //  password2 : string
  
  email1 = "mciripuram@gmail.com";
  password1 = "hemanth";
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) {}
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { 
    return this.loginForm.controls;
  }
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    // if(this.loginForm.invalid){
    //   return;
    // }
    if(this.loginForm.value.email == this.email1 && this.loginForm.value.password == this.password1){
      this.authService.login(this.loginForm.value);
      this.router.navigateByUrl('/admin');
    }
  }
}