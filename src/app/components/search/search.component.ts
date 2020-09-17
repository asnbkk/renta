import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public searchVal = ''

  ngOnInit(): void {
  }

  onSearchChange(value) {
    this.searchVal = value
  }

  onSearch(): void {
    this.productService.Search(this.searchVal).subscribe(res => {
      console.log(res)
    })
  }

}
