import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      480:{
        items:5
      },
      768:{
        items:7
      }
    },
    nav: true
  }
  constructor(private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      }
    })
  }
}
