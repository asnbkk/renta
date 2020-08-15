import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regModel = {
    email: '',
    name: '',
    password: ''
  }
  public password2: ''

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.regModel.password == this.password2){
      this.userService.registration(this.regModel).subscribe(res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', res.user.name)
        localStorage.setItem('email', res.user.email)
      if(res.token) {
        this.userService.isAuthorizedChange.next(this.regModel.email)
        console.log(this.userService.isAuthorized)
        this.router.navigate(['/'])
      }
      })
    }
  }
  
}
