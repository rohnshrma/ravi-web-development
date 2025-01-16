const menu = new Menu();
const cart = new Cart();

const menuItemsDiv = document.getElementById("menuItems");
const cartItemsDiv = document.getElementById("cartItems");
const totalPriceDiv = document.getElementById("totalPrice");
const cardMainDiv = document.querySelector(".card");

async function renderMenu(category) {
  console.log("rendering menu");
  menuItemsDiv.innerHTML = "<p>Loading Menu...</p>";
  await menu.fetchMenu();
  displayMenu(menu.items, category);
}

function displayMenu(items, category) {
  console.log(items, category);

  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  const groupBySubCategory = filteredItems.reduce((acc, item) => {
    acc[item.subCategory] = acc[item.subCategory] || [];
    acc[item.subCategory].push(item);
    return acc;
  }, {});

  console.log(groupBySubCategory);

  menuItemsDiv.innerHTML = Object.keys(groupBySubCategory)
    .map((subCategory) => {
      const subCategoryItems = groupBySubCategory[subCategory]
        .map((item) => {
          return `<div class="col-md-6">
        <div class="menu-items">
        <img src="./images/${item.image}" alt="" srcset="" class="image">
        <p class="itemName">${item.name} - $${item.price}</p>
        <p class="itemDescription">${item.description}</p>
        <button class='btn btn-primary btn-sm' onclick='addToCart(${item.id})'>Add to Cart</button>
        </div>
    </div>`;
        })
        .join("");

      console.log(subCategoryItems);

      return `
        <div class="subCategory">
          <h3>${subCategory}</h3>
          <div class="row">${subCategoryItems}</div>
        </div>
      `;
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
  } else {
    cardMainDiv.style.display = "";
    menuItemsDiv.style.width = "1000px";
  }

  cartItemsDiv.innerHTML = cart.items
    .map(
      (item) => `
    <div class="cart-item">
    <img src="./images/${item.image}" alt="" srcset="" class="cardImage">
    <p class="itemDescription">${item.name} - ${item.price}</p>
    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
    </div>`
    )
    .join("");
  totalPriceDiv.innerText = `Total : $${cart.calculateTotal()}`;
}

renderMenu();
cardMainDiv.style.display = "none";
