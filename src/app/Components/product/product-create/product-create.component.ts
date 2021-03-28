import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from './../../../Services/product.service';
import { AuthService } from './../../../Services/auth.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: Partial<Product> = {
    name: '',
    description: '',
    price: 0,
    condition: ',',
    brand: '',
    categoryId: '',
    photo: '',
  };

  url: string | ArrayBuffer | null | undefined = '';

  constructor(private productService: ProductService, private authService : AuthService) {}

  ngOnInit(): void {}

  addProduct() {
    const user = this.authService.user.getValue()?.savedUser;
    this.productService.create({...this.product, photo: this.url?.toString(), ownerId: user?._id})
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onSelectFile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(input.files[0]);

    reader.onload = (event) => {
      this.url = event.target?.result;
    };
  }
}
