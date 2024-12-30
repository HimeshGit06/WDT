let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  totalPrice += price;

  updateCart();
}

function updateCart() {
  // Update cart count
  document.getElementById('cart-count').textContent = cart.length;

  // Update cart items
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });

  // Update total price
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
  } else {
    alert(`Your total is $${totalPrice.toFixed(2)}. please login and complete the payment`);
    // Reset cart after checkout
    cart = [];
    totalPrice = 0;
    updateCart();
    toggleCart();
  }
}
