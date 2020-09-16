import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public category: boolean = false
  public token = localStorage.getItem('token')
  // public username
  
  constructor(private router: Router, private categoryService: CategoryService, private userService: UserService) { 
    router.events.subscribe((val) => {
      this.category = false
  });

  // this.username = localStorage.getItem('username')
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.userService.logout()
  }

  get username() {
    return this.userService.isAuthorized
  }

}
