// Create a new instance of the Menu class to manage the menu items.
const menu = new Menu();

// Create a new instance of the Cart class to manage the shopping cart.
const cart = new Cart();

// Get a reference to the HTML element where menu items will be displayed.
const menuItemsDiv = document.getElementById("menuItems");

// Get a reference to the HTML element where cart items will be displayed.
const cartItemsDiv = document.getElementById("cartItems");

// Get a reference to the HTML element where the total price will be displayed.
const totalPriceDiv = document.getElementById("totalPrice");

// Get a reference to the main card container, which may be shown or hidden.
const cardMainDiv = document.querySelector(".card");

// Function to fetch and render the menu based on the selected category.
async function renderMenu(category) {
  console.log("rendering menu"); // Log the rendering process to the console.

  // Show a loading message while the menu is being fetched.
  menuItemsDiv.innerHTML = "<p>Loading Menu...</p>";

  // Wait for the menu items to be fetched asynchronously.
  await menu.fetchMenu();

  // Call the displayMenu function to render the menu items on the page.
  displayMenu(menu.items, category);
}

// Function to display the menu items, optionally filtered by category.
function displayMenu(items, category) {
  console.log(items, category); // Log the items and category being processed.

  // Filter the items based on the selected category, or show all items if no category is specified.
  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  // Group the filtered items by their subcategory using the reduce method.
  const groupBySubCategory = filteredItems.reduce((acc, item) => {
    acc[item.subCategory] = acc[item.subCategory] || []; // Create an array for the subcategory if it doesn't exist.
    acc[item.subCategory].push(item); // Add the item to the appropriate subcategory group.
    return acc;
  }, {});

  console.log(groupBySubCategory); // Log the grouped items by subcategory.

  // Generate HTML for each subcategory and its items.
  menuItemsDiv.innerHTML = Object.keys(groupBySubCategory)
    .map((subCategory) => {
      // Generate HTML for the items in the current subcategory.
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
        .join(""); // Combine all item HTML into a single string.

      console.log(subCategoryItems); // Log the generated HTML for the subcategory.

      // Return HTML for the subcategory and its items.
      return `
        <div class="subCategory">
          <h3>${subCategory}</h3>
          <div class="row">${subCategoryItems}</div>
        </div>
      `;
    })
    .join(""); // Combine all subcategory HTML into a single string.
}

// Function to add an item to the cart by its ID.
function addToCart(item_id) {
  // Find the item in the menu by its ID.
  const item = menu.items.find((item) => item.id === item_id);

  // If the item exists, add it to the cart and update the cart display.
  if (item) {
    cart.addItem(item);
    renderCart();
  }
}

// Function to render the cart items and total price.
function renderCart() {
  // If the cart is empty, show a message and reset the total price.
  if (cart.items.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your Cart is Empty!</p>";
    totalPriceDiv.innerText = "Total : $0";
    return;
  } else {
    // If the cart has items, make the card container visible and adjust styles.
    cardMainDiv.style.display = "";
    menuItemsDiv.style.width = "1000px";
  }

  // Generate HTML for each cart item.
  cartItemsDiv.innerHTML = cart.items
    .map(
      (item) => `
        <div class="cart-item">
          <img src="./images/${item.image}" alt="" srcset="" class="cardImage">
          <p class="itemDescription">${item.name} - ${item.price}</p>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
        </div>`
    )
    .join(""); // Combine all cart item HTML into a single string.

  // Update the total price display with the calculated total.
  totalPriceDiv.innerText = `Total : $${cart.calculateTotal()}`;
}

// Call the renderMenu function to initially load and display the menu.
renderMenu();

// Hide the card container by default until there are items in the cart.
cardMainDiv.style.display = "none";
