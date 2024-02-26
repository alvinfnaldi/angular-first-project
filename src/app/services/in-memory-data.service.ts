import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from '../interfaces/category';

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

    return { categories }
  }

  genId(categories: Category[]): number {
    return categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 11
  }
}
