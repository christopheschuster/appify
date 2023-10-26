/* 
 * Filename: complex_code.js
 * Description: This code demonstrates a complex shopping cart system with various functionalities.
 * Author: John Doe
 */

// Product class to represent each product in the shopping cart
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Shopping cart class to manage the cart and its functionalities
class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalItems = 0;
    this.totalPrice = 0;
  }

  // Add a product to the cart
  addProduct(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.products.push(product);
      this.totalItems++;
      this.totalPrice += product.price;
    }
  }

  // Remove a product from the cart
  removeProduct(productId) {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      const [removedProduct] = this.products.splice(index, 1);
      this.totalItems--;
      this.totalPrice -= removedProduct.price;
    }
  }

  // Get the count of a specific product in the cart
  getProductCount(productId) {
    return this.products.filter(product => product.id === productId).length;
  }

  // Get the total number of items in the cart
  getTotalItems() {
    return this.totalItems;
  }

  // Get the total price of all items in the cart
  getTotalPrice() {
    return this.totalPrice;
  }
}

// Example usage of the ShoppingCart class
const cart = new ShoppingCart();

const laptop = new Product(1, "Laptop", 1000);
const phone = new Product(2, "Phone", 800);
const headphones = new Product(3, "Headphones", 200);

cart.addProduct(laptop, 2);
cart.addProduct(phone, 1);
cart.addProduct(headphones, 3);

console.log("Cart Summary:");
console.log("Total Items:", cart.getTotalItems());
console.log("Total Price:", cart.getTotalPrice());

cart.removeProduct(2);

console.log("Updated Cart Summary:");
console.log("Total Items:", cart.getTotalItems());
console.log("Total Price:", cart.getTotalPrice());

console.log("Phone Count:", cart.getProductCount(2));