import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtService } from 'src/app/service/jwt.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    })
  }
  showSuccessToast() {
    
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwt != null) {
          // alert("Hello, Your token is " + response.jwt);
          const jwtToken = response.jwt;
          this.userService.setLogin(true);
          localStorage.setItem('jwt', jwtToken);
          this.showSuccessToast()
          this.router.navigateByUrl("/dashboard");
        }
      }
    )
  }

}
