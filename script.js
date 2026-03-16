// Add to Cart
function addToCart(btn) {
  if (!btn) return;
  btn.textContent = '✓ Added to Cart!';
  btn.style.background = '#4ade80';
  btn.style.color = '#0b1120';
  setTimeout(() => {
    btn.textContent = 'Add to Cart';
    btn.style.background = '';
    btn.style.color = '';
  }, 2000);
}

// Cart quantity
const PRICE = 1999;
function changeQty(delta) {
  const qtyEl = document.getElementById('qty');
  const totalEl = document.getElementById('item-total');
  const subtotalEl = document.getElementById('subtotal');
  const grandEl = document.getElementById('total');
  if (!qtyEl) return;
  let qty = parseInt(qtyEl.textContent) + delta;
  if (qty < 1) qty = 1;
  qtyEl.textContent = qty;
  const t = PRICE * qty;
  if (totalEl) totalEl.textContent = '₹' + t.toLocaleString('en-IN');
  if (subtotalEl) subtotalEl.textContent = '₹' + t.toLocaleString('en-IN');
  if (grandEl) grandEl.textContent = '₹' + t.toLocaleString('en-IN');
}

// Remove cart item
function removeItem(btn) {
  const card = btn.closest('.cart-item-card');
  if (card) {
    card.style.opacity = '0';
    card.style.transform = 'translateX(20px)';
    card.style.transition = 'all 0.3s';
    setTimeout(() => card.remove(), 300);
  }
}

// Contact form
function sendMessage(btn) {
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#4ade80';
  btn.style.color = '#0b1120';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.style.color = '';
  }, 2500);
}

// Checkout
function checkout(btn) {
  btn.textContent = 'Processing...';
  setTimeout(() => { btn.textContent = 'Proceed to Checkout'; }, 2000);
}

// Login
function handleLogin(btn) {
  btn.textContent = 'Signing in...';
  btn.style.opacity = '0.8';
  setTimeout(() => {
    btn.textContent = '✓ Signed In!';
    btn.style.background = '#4ade80';
    btn.style.color = '#0b1120';
    btn.style.opacity = '1';
    setTimeout(() => { window.location.href = 'index.html'; }, 1000);
  }, 1500);
}

// Signup
function handleSignup(btn) {
  btn.textContent = 'Creating account...';
  btn.style.opacity = '0.8';
  setTimeout(() => {
    btn.textContent = '✓ Account Created!';
    btn.style.background = '#4ade80';
    btn.style.color = '#0b1120';
    btn.style.opacity = '1';
    setTimeout(() => { window.location.href = 'login.html'; }, 1000);
  }, 1500);
}