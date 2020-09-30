import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartSum = 600;

  constructor(private cartService: CartService,
    private toastService: ToastService,
    private translateService: TranslateService)
     { }

  ngOnInit(): void {
    console.log(this.cartItems.toString()+console.log(this.cartItems.toString()+ 
    "kui ma tulen lehele ja ngOinit ei ole käima läinud")
     )
    
    this.cartItems = this.cartService.getItemsInCart();
    console.log(this.cartItems.toString()+ 
    "sisu kui ma tulen lehele ja  ngOninit on sisu ära teinud") ;
    
    this.cartSum = 0;
    this.cartItems.forEach((item)=>{
      this.cartSum = this.cartSum + (Number)(item.price);
    })
    
  }

   onDelete(): void {
    console.log(this.cartItems.toString()+ "sisu kui ma vajutan kustutamis nupule")
    
     this.cartService.removeAll();
     console.log(this.cartItems.toString()+ "sisu kui ma olen service tühjendand")
    
     this.cartItems = this.cartService.getItemsInCart();
     console.log(this.cartItems.toString()+ "sisu kui ma olen uuesti servicelt küsinud")
    this.toastService.info("Edukalt kõik esemed ostukorvist kustutatud")
   } 

   onDeleteOne(i:number): void {
     this.cartService.removeItem(i);
     this.cartItems = this.cartService.getItemsInCart();
     this.cartSum = 0;
    this.cartItems.forEach((item)=>{
      this.cartSum = this.cartSum + (Number)(item.price);
    })
    this.toastService.info(this.translateService.instant("Edukalt valitud ese ostukorvist kustutatud"));
   }
   
}
