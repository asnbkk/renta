import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.css']
})
export class SubcategoryDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public id
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }

}
