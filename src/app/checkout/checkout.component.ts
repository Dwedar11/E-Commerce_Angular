import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private _CartService: CartService) { }


  shippingAddress: FormGroup = new FormGroup({

    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),


  });

  navigateToPage(url: string) {
    window.location.href = url;
}
 


  // 65300f850bbe37cec2ebd7c6
  handleSubmit(shippingAddress: FormGroup) {
   
    this._CartService.getLoggedUserCart().subscribe(cartData => {
     
      cartData.data._id
      console.log('cart id is ' + cartData.data._id)
      console.log(shippingAddress.value)
      this._CartService.onlinePayment(shippingAddress.value, cartData.data._id).subscribe({
        next: (response) => {
          this.navigateToPage(response.session.url);
          console.log(response.session.url);
        },
        error: (err) => console.log(err)

      })

    })

  }

}
