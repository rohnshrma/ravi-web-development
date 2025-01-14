class Menu {
  constructor() {
    this.items = [];
  }

  async fetchMenu() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.items = [
          new FoodItem(1, "Veg Burger", 99, "veg", "Delicious Veggie Burger"),
          new FoodItem(
            2,
            "Cheese Burger",
            199,
            "veg",
            "Delicious Cheese Veggie Burger"
          ),
          new FoodItem(3, "Pizza", 299, "veg", "Italian Style Pizza"),
          new FoodItem(
            4,
            "Hakka Noodles",
            99,
            "non-veg",
            "Spicy Hakka Noodles"
          ),
        ];
        resolve(this.items);
      }, 1000);
    });
  }
}
