import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClint: HttpClient) { }

  getProducts(): Observable<any> {
    return this._httpClint.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getProductDetails(id:string): Observable<any> {

    return this._httpClint.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }
  getCategories(): Observable<any> {

    return this._httpClint.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  }

}

