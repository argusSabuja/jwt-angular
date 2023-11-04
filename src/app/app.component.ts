import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jwt-angular';
  login=false;
  constructor(private userServvice:UserService){
    
  }
  ngOnInit(): void {
    this.login=this.isLoggedIn();
  }

  isLoggedIn(){
    this.login=localStorage.getItem('jwt')==null;
    return this.login;
  }
}
