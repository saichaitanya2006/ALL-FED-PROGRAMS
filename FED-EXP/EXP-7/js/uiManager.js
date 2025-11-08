// js/uiManager.js
import { getCart, removeFromCart, getTotal } from "./cartManager.js";

export function renderCart(container) {
  const cart = getCart();
  container.innerHTML = "<h2>Shopping Cart</h2>";

  if (cart.length === 0) {
    container.innerHTML += "<p>Your cart is empty.</p>";
    return;
  }

  const list = document.createElement("ul");

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.title} - $${item.price}
      <button data-index="${index}">Remove</button>
    `;
    list.appendChild(li);
  });

  container.appendChild(list);

  const total = document.createElement("p");
  total.innerHTML = `<strong>Total:</strong> $${getTotal()}`;
  container.appendChild(total);

  const checkoutBtn = document.createElement("button");
  checkoutBtn.textContent = "Proceed to Checkout";
  container.appendChild(checkoutBtn);

  // Remove button listeners
  container.querySelectorAll("button[data-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.getAttribute("data-index"));
      renderCart(container);
    });
  });
}