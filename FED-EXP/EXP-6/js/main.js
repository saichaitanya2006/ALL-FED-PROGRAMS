// js/main.js
import { renderBooks } from "./bookListing.js";
import { addToCart } from "./cartManager.js";
import { renderCart } from "./uiManager.js";

const bookContainer = document.getElementById("book-list");
const cartContainer = document.getElementById("cart");

fetch("./data/books.json")
  .then(response => response.json())
  .then(books => {
    renderBooks(books, bookContainer);

    // Add to cart event
    bookContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const index = e.target.getAttribute("data-index");
        addToCart(books[index]);
        renderCart(cartContainer);
      }
    });
  });