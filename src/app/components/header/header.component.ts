import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public category: boolean = false
  public token = localStorage.getItem('token')
  constructor(private router: Router, private categoryService: CategoryService) { 
    router.events.subscribe((val) => {
      this.category = false
  });
  }

  toggleCategory() {
    this.categoryService.toggleCategoryVisibility()
  }

  ngOnInit(): void {
  }

}
