// js/bookListing.js
export function renderBooks(books, container) {
  container.innerHTML = "";
  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Price:</strong> $${book.price}</p>
      <p><strong>Status:</strong> ${book.availability}</p>
      <button data-index="${index}" ${book.availability !== "in stock" ? "disabled" : ""}>
        Add to Cart
      </button>
    `;
    container.appendChild(bookDiv);
  });
}