import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignedInUser } from 'src/app/Models/signedInUser.model';
import { User } from 'src/app/Models/user.model.ts';
import { Product } from '../../../Models/product.model';
import { ProductService } from '../../../Services/product.service';
import { AuthService } from './../../../Services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  isAuthenticated = false;
  private userSub: Subscription | null = null;
  public currentUser: User | null | undefined = null;
  
  constructor(private productService: ProductService, private authService:AuthService) {}

  ngOnInit(): void {
    this.retrieveProducts();
    this.userSub = this.authService.user.subscribe(
      (user: SignedInUser | null) => {
        this.isAuthenticated = !!user;
        this.currentUser = user?.savedUser;
      }
    );
  }

  retrieveProducts(): void {
    this.productService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open():void {
    
  }
}
