class Cart {
  constructor() {
    this.items = [];
  }
  addItem(foodItem) {
    this.items.push(foodItem);
  }
  removeItem(item_id) {
    this.items = this.items.filter((item) => item.id !== item_id);
  }
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
