import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  userData;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    console.log(this.authService.isLoggedIn());
    if(this.authService.isLoggedIn()){
      this.userData = JSON.parse(localStorage.getItem('storeObj'));
      console.log(this.userData);
    }
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  
}