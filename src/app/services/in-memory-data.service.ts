import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  // createDb untuk create database
  createDb() {

    // variable categories ini as table
    const categories = [
      { id: 1, categoryName: "Computer" },
      { id: 2, categoryName: "T-Shirt" },
      { id: 3, categoryName: "Electronic" },
    ]

    const products = [
      { id: 1, name: "Table", stock: 3, price: 25_000, photo: "https://www.ikea.com/sg/en/images/products/sandsberg-table-black__1074348_pe856162_s5.jpg?f=s" },
      { id: 2, name: "Ladder", stock: 6, price: 27_000, photo: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/R1874993-02?pgw=1" },
      { id: 3, name: "Chair", stock: 5, price: 16_000, photo: "https://www.ikea.com/sg/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s" },
    ]

    return { categories, products }
  }

  genId(categories: Category[]): number {
    return categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 11
  }
  genIdProd(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(c => c.id)) + 1 : 11
  }
}
