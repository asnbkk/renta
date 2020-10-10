import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {
  public username
  public email
  constructor() { 
    this.username = localStorage.getItem('username') || 'Пользователь'
    this.email = localStorage.getItem('email') || ''
  }

  ngOnInit(): void {
  }

}
