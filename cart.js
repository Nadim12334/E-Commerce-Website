const selectedProducts = JSON.parse(localStorage.getItem("Products")) || [];

function displayProducts() {
  for (let i = 0; i < selectedProducts.length; i++) {
    selectedProducts[i].qty = 1;
    selectedProducts[i].total = selectedProducts[i].price;

    document.getElementById("addedproducts").innerHTML += `
      <img src="${selectedProducts[i].img}" />
      <span>${selectedProducts[i].name}</span>
      <span>₹ ${selectedProducts[i].price}</span>
    `;

    document.getElementById("quantities").innerHTML += `
      <div class="quantity-controls">
        <span id="decrement-${i}" onclick="decrement(${i})">-</span>
        <span id="quantity-${i}">${selectedProducts[i].qty}</span>
        <span id="increment-${i}" onclick="increment(${i})">+</span>
      </div>
    `;

    document.getElementById("showtotal").innerHTML += `
      <span id="product-total-${i}">₹ ${selectedProducts[i].total}</span><br/>
    `;
  }

  calculateSubTotal();
}

function decrement(index) {
  if (selectedProducts[index].qty > 1) {
    selectedProducts[index].qty--;
    updateQuantity(index);
  }
}

function increment(index) {
  selectedProducts[index].qty++;
  updateQuantity(index);
}

function updateQuantity(index) {
  document.getElementById(`quantity-${index}`).innerText = selectedProducts[index].qty;
  productTotal(index);
}

function productTotal(index) {
  selectedProducts[index].total = selectedProducts[index].qty * selectedProducts[index].price;
  document.getElementById(`product-total-${index}`).innerText = `₹ ${selectedProducts[index].total}`;
  calculateSubTotal();
}

function calculateSubTotal() {
  let totalAmount = selectedProducts.reduce((sum, product) => sum + product.total, 0);
  document.getElementById("subTotal").innerText = `₹ ${totalAmount}`;
}

displayProducts();