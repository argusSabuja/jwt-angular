import { Component } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  loginForm: FormGroup | undefined;
  message: string;

  constructor(
    private service: JwtService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    // this.hello();
  }

  hello() {
    this.service.hello().subscribe((response) => {
      console.log(response);
      this.message = response.message;
    });
  }


  startChatting(formData) {
    // const name=name.value;
    const username = formData.username;
    // console.log('Username entered:', username)
    if(username.trim()==""){
      console.log("no username");
      
    }
    else{
      this.setUserNameInService(username)
    this.router.navigate(['chat-page']);
    }
    
  }

  setUserNameInService(name: string) {
    this.userService.setUserName(name);
  }
}
