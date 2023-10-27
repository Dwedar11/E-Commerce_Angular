import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService) { }

    

    

  productDetails:any;
  productId: any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    });

    this._ProductsService.getProductDetails(this.productId).subscribe({
      next: (response) => this.productDetails = response.data

    })


  }
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
        items: 1
      }
    },
    nav: true
  }
}

