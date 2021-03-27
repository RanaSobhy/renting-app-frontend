import { Component, OnInit } from '@angular/core';
import { Product } from './../../Models/product.model';
import { ProductService } from './../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
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
}
