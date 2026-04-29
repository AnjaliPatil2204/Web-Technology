import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  selectedCategory: string = 'All';

  products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000 },
    { id: 2, name: 'Shoes', category: 'Fashion', price: 2000 },
    { id: 3, name: 'Phone', category: 'Electronics', price: 30000 },
    { id: 4, name: 'Watch', category: 'Fashion', price: 5000 }
  ];

  cart: any[] = [];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    this.cart.push(product);
  }
}