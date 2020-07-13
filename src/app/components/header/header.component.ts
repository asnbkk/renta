import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public category: boolean = false
  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.category = false
  });
  }

  ngOnInit(): void {
  }

}
