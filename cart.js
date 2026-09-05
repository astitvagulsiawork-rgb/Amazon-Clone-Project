// Cart + orders logic. Pure frontend: everything lives in localStorage.
const CART_KEY = "amazonClone_cart";
const ORDERS_KEY = "amazonClone_orders";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const cart = getCart();
  const line = cart.find(i => i.id === productId);
  if (line) {
    line.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
}

function setQty(productId, qty) {
  qty = Math.max(1, parseInt(qty, 10) || 1);
  const cart = getCart();
  const line = cart.find(i => i.id === productId);
  if (line) line.qty = qty;
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function cartLinesWithProducts() {
  return getCart()
    .map(line => {
      const product = typeof getProductById === "function" ? getProductById(line.id) : null;
      return product ? { ...line, product } : null;
    })
    .filter(Boolean);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartSubtotal() {
  return cartLinesWithProducts().reduce((sum, l) => sum + l.product.price * l.qty, 0);
}

function updateCartBadge() {
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = cartCount();
  });
}

// --- Orders (created at checkout, read on the Orders page) ---
function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function placeOrder() {
  const lines = cartLinesWithProducts();
  if (lines.length === 0) return null;
  const orders = getOrders();
  const order = {
    id: "AMZ-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    date: new Date().toISOString(),
    items: lines.map(l => ({ id: l.id, title: l.product.title, qty: l.qty, price: l.product.price })),
    total: cartSubtotal(),
  };
  orders.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  clearCart();
  return order;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  const menuBtn = document.getElementById("all-menu-btn");
  const dropdown = document.getElementById("all-menu-dropdown");
  if (menuBtn && dropdown) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });
    dropdown.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", () => dropdown.classList.remove("show"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") dropdown.classList.remove("show");
    });
  }
});
