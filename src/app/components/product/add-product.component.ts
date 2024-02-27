import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) {

    this.form = this.formBuilder.group({
      product_name: ["", Validators.required],
      product_stock: ["", Validators.required],
      product_price: ["", Validators.required],
      product_photo: ["", Validators.required]
    })
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const name: string = this.f.product_name.value;
    const stock: number = this.f.product_stock.value;
    const price: number = this.f.product_price.value;
    const photo: string = this.f.product_photo.value;

    this.productService.addProduct({ name, stock, price, photo } as Product).subscribe(() => this.router.navigate(["product"]))
  }

  ngOnInit(): void {
  }
}
