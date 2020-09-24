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

  errors = []
  public password2: ''

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errors = []

    if(this.regModel.password !== this.password2) this.errors.push('Пароли не совпадают!')

    else{
      let re = /\S+@\S+\.\S+/;
      if (!re.test(this.regModel.email)) this.errors.push('Введите корректный email!')
      else this.userService.registration(this.regModel).subscribe(res => {
        if (res.error == 'Email already registered') this.errors.push('Пользователь с таким адресом электронной почты уже зарегистрирован!')
        
        if(!res.error){
          localStorage.setItem('token', res.token)
          localStorage.setItem('username', res.user.name)
          localStorage.setItem('email', res.user.email)
        }
        if(res.token) {
          this.userService.isAuthorizedChange.next(this.regModel.email)
          console.log(this.userService.isAuthorized)
          this.router.navigate(['/'])
        }
      })
    }
  }
  
}
