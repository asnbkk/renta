import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = {
    email: '',
    password: ''
  }
  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginModel.email, this.loginModel.password)
    this.userService.login(this.loginModel).subscribe(res => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.user.name)
      localStorage.setItem('email', res.user.email)

      if(res.token) {
        this.userService.isAuthorizedChange.next(this.loginModel.email)
        //response name
        this.router.navigate(['/'])
      }
    })
  }
}
