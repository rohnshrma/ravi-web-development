class Menu {
  constructor() {
    this.items = [];
  }

  async fetchMenu() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.items = [
          new FoodItem(1, "nudles.jpg", "Starter", "Veg Burger", 99, "veg", "Delicious Veggie Burger"),
          new FoodItem(2, "tandooriplatter.jpg", "Starter", "Indian Tandoori Platter", 350, "non-veg", "Assorted tandoori chicken, fish tikka, and paneer"),
          new FoodItem(3, "rolls.jpg", "Starter", "Spring Rolls", 200, "veg", "Crispy vegetable rolls served with a tangy dip"),
          new FoodItem(4, "tomyum.jpeg", "Soups", "Tom Yum Soup", 180, "non-veg", "Traditional Thai soup with shrimp or chicken"),
          new FoodItem(5, "caesarsalad.jpeg", "Salads", "Caesar Salad", 250, "veg", "Fresh lettuce, parmesan, croutons, and Caesar dressing"),
          new FoodItem(6, "butterchicken.jpeg", "Main Course", "Butter Chicken", 400, "non-veg", "Classic North Indian dish in a rich tomato gravy"),
          new FoodItem(7, "carbonara.jpeg", "Main Course", "Spaghetti Carbonara", 450, "non-veg", "Authentic Italian pasta with pancetta and creamy sauce"),
          new FoodItem(8, "vegmanchurian.jpeg", "Main Course", "Vegetable Manchurian", 300, "veg", "Spicy Indo-Chinese dish with fried veggie balls in sauce"),
          new FoodItem(9, "mojito.jpeg", "Beverages", "Virgin Mojito", 120, "veg", "Refreshing mint and lime mocktail"),
          new FoodItem(10, "brownie.jpeg", "Desserts", "Brownie with Hot Chocolate Sauce", 200, "veg", "Rich chocolate brownie with hot chocolate sauce")
        ];
        resolve(this.items);
      }, 1000);
    });
  }
}
