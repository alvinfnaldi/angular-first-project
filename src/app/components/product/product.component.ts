import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: Product[] = [];

  // implementation dependency injection, loose couple
  constructor(private productService: ProductService, private router: Router) {

  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (v) => this.products = v,
      error: (e) => console.error(e),
      complete: () => console.info("completed")
    })
  }

  addProduct() {
    this.router.navigate(["product/add"]);
  }

  editProduct(id: number) {
    this.router.navigate(["product/update", id]);
  }

  deleteProduct(product: Product) {
    this.products.filter(f => f !== product)
    this.productService.deleteProduct(product).subscribe();
    this.getProducts();
  }

  idr(price: number) {
    return Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
