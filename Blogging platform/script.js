const cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.innerHTML =
      "<ul>" +
      cart
        .map((item) => `<li>${item.name} - $${item.price}</li>`)
        .join("") +
      "</ul>";
  }
}