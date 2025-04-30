let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItemsList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} (x${item.quantity}) - ₾${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: ₾${total.toFixed(2)}`;
}