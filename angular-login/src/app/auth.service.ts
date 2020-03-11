import { Injectable } from '@angular/core';
import { User } from './user';  
import { Router, Data } from '@angular/router';
// import { }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router) {}
  login(formData : User){
    localStorage.setItem('storeObj', JSON.stringify(formData));
  }
  isLoggedIn(){
    return JSON.parse(localStorage.getItem('storeObj'))  != null;
  }
  logout(){
    localStorage.removeItem('storeObj');
  }
}