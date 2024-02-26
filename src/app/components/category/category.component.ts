import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  // implementation dependency injection, loose couple
  constructor(private categoryService: CategoryService, private router: Router) {

  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (v) => this.categories = v,
      error: (e) => console.error(e),
      complete: () => console.info("completed")
    })
  }

  addCategory() {
    this.router.navigate(["category/add"]);
  }

  editCategory(id: number) {
    this.router.navigate(["category/update", id]);
  }

  deleteCategory(category: Category) {
    this.categories.filter(f => f !== category)
    this.categoryService.deleteCategory(category).subscribe();
    this.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
