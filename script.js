let cart = [];
let total = 0;

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// UPDATE CART UI
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const count = document.getElementById("cart-count");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    cartItems.appendChild(li);
  });

  totalEl.textContent = total;
  count.textContent = cart.length;
}

// GENERATE INVOICE
function generateInvoice() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const invoice = document.getElementById("invoice");
  const invoiceItems = document.getElementById("invoice-items");
  const invoiceTotal = document.getElementById("invoice-total");
  const invoiceDate = document.getElementById("invoice-date");

  invoiceItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    invoiceItems.appendChild(li);
  });

  invoiceTotal.textContent = total;

  const now = new Date();
  invoiceDate.textContent = "Date: " + now.toLocaleString();

  invoice.classList.remove("hidden");
}

// HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
