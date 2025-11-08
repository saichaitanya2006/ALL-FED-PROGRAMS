// js/cartManager.js
let cart = [];

export function addToCart(book) {
  cart.push(book);
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function getCart() {
  return cart;
}

export function getTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}