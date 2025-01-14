const menu = new Menu();
const cart = new Cart();

const menuItemsDiv = document.getElementById("menuItems");
const cartItemsDiv = document.getElementById("cartItems");
const totalPriceDiv = document.getElementById("totalPrice");

async function renderMenu() {
  console.log("rendering menu");
  menuItemsDiv.innerHTML = "<p>Loading Menu...</p>";
  await menu.fetchMenu();
  displayMenu(menu.items);
}

function displayMenu(items) {
  console.log(items);
  menuItemsDiv.innerHTML = items
    .map((item) => {
      return `<div class="col-md-6">
            <div class="menu-items">
            <h4>${item.name} - $${item.price}</h4>
            <p>${item.description}</p>
            <button class='btn btn-primary btn-sm' onclick='addToCart(${item.id})'>Add to Cart</button>
            </div>
        </div>`;
    })
    .join("");
}

function addToCart(item_id) {
  const item = menu.items.find((item) => item.id === item_id);
  if (item) {
    cart.addItem(item);
    renderCart();
  }
}

function renderCart() {
  if (cart.items.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your Cart is Empty!</p>";
    totalPriceDiv.innerText = "Total : $0";
    return;
  }

  cartItemsDiv.innerHTML = cart.items
    .map(
      (item) => `
    <div class="cart-item">
    <h4>${item.name} - ${item.price}</h4>
    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
    </div>`
    )
    .join("");
  totalPriceDiv.innerText = `Total : $${cart.calculateTotal()}`;
}

renderMenu();
