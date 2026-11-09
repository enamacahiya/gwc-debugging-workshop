/**
 * ByteMart — GWC Production Incident Simulation
 *
 * This is a fake application to practice debugging,
 * root cause analysis, and incident response.
 * No real payments or orders are processed.
 */

const products = [
  { id: 1, name: "Mechanical Keyboard", price: 49.99, emoji: "⌨️", detail: "Clicky keys, big ideas" },
  { id: 2, name: "Wireless Mouse", price: 24.99, emoji: "🖱️", detail: "Work comfortably" },
  { id: 3, name: "Desk Lamp", price: 35.0, emoji: "💡", detail: "Brighten your workspace" },
  { id: 4, name: "Notebook", price: 12.5, emoji: "📓", detail: "Capture every idea" }
];

const cart = [];
const money = amount => `$${amount.toFixed(2)}`;

/**
 * Renders the available products in the storefront.
 */
function renderProducts() {
  document.getElementById("products").innerHTML = products.map(product => `
    <article class="product">
      <div class="product-art" aria-hidden="true">${product.emoji}</div>
      <h3>${product.name}</h3>
      <p>${product.detail}</p>

      <div class="product-bottom">
        <strong>${money(product.price)}</strong>
        <button data-add="${product.id}">Add to cart</button>
      </div>
    </article>
  `).join("");
}

/**
 * Adds a product to the cart or increments its quantity if it already exists.
 *
 * @param {number} productId - ID of the product to add.
 */
function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  renderCart();
}

/**
 * Updates the quantity of a product in the cart.
 * Removes the product if its quantity reaches zero.
 *
 * @param {number} productId - ID of the product to update.
 * @param {number} change - Amount to increase or decrease the quantity.
 */
function changeQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart.splice(cart.indexOf(item), 1);
  }

  renderCart();
}

/**
 * Calculates the subtotal of all items in the cart.
 *
 * @returns {number} Total price before taxes or additional fees.
 */
function calculateSubtotal() {
  return cart.reduce((total, item) => {
    const product = products.find(product => product.id === item.id);
    return total + product.price;
  }, 0);
}

/**
 * Renders the shopping cart, including item quantities,
 * cart count, and subtotal.
 */
function renderCart() {
  const container = document.getElementById("cart-items");

  container.innerHTML = cart.length
    ? cart.map(item => {
        const product = products.find(product => product.id === item.id);

        return `
          <div class="cart-row">
            <div>
              <div class="cart-name">${product.name}</div>
              <div class="cart-price">${money(product.price)} each</div>
            </div>

            <div class="qty">
              <button
                data-qty="${item.id}"
                data-change="-1"
                aria-label="Remove one ${product.name}">
                −
              </button>
              <span>${item.quantity}</span>
              <button
                data-qty="${item.id}"
                data-change="1"
                aria-label="Add one ${product.name}">
                +
              </button>
            </div>
          </div>
        `;
      }).join("")
    : '<p class="empty">Your cart is empty. Add something to get started!</p>';

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  document.getElementById("cart-count").textContent = itemCount;
  document.getElementById("subtotal").textContent = money(calculateSubtotal());

  // Reset checkout feedback when the cart changes.
  document.getElementById("checkout-message").textContent = "";
  document.getElementById("checkout-message").className = "message";
}

/**
 * Processes a simulated checkout.
 * Validates the cart, creates an order, and displays confirmation.
 */
function checkout() {
  const message = document.getElementById("message");

  if (cart.length === 0) {
    message.textContent = "Add an item before checking out.";
    message.className = "message error";
    return;
  }

  const order = {
    items: cart.map(item => ({ ...item })),
    total: calculateSubtotal(),
    customer: { name: "GWC Guest" }
  };

  const customerName = order.customer.profile.name;

  cart.length = 0;
  renderCart();

  message.textContent = `Success! Thanks, ${customerName}. Demo order placed for ${money(order.total)}.`;
  message.className = "message success";
}


// Event listeners

document.getElementById("products").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (button) {
    addToCart(Number(button.dataset.add));
  }
});

document.getElementById("cart-items").addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");

  if (button) {
    changeQuantity(
      Number(button.dataset.qty),
      Number(button.dataset.change)
    );
  }
});

document.getElementById("checkout-button").addEventListener("click", checkout);

// Initialize storefront
renderProducts();
renderCart();
