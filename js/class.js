// class Car {
//   // properties
//   brand = "ford";
//   model = "mustang";
//   colors = ["Black", "Yellow", "Grey"];
//   isAvailable = true;

//   // methods
//   info() {
//     return `Brand : ${this.brand}\nModel : ${this.model}\nColors : ${
//       this.colors
//     }\nAvailable : ${this.isAvailable ? "Yes" : "No"}`;
//   }
// }

// var c1 = new Car();
// var c2 = new Car();
// var c3 = new Car();
// var c4 = new Car();

// // console.log(c1);
// // console.log(c2);
// // console.log(c3);
// // console.log(c4);

// console.log(c1.info());

// class Person {
//   // {}
//   putValues(name, age, gender, profession) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.profession = profession;
//   }
// }

// var ravi = new Person();
// console.log(ravi);

// ravi.putValues("Ravi", 25, "Male", "Developer");

// console.log(ravi);

// class Person {
//   // {}
//   constructor(name, age, gender, profession) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.profession = profession;
//     console.log("New Person Created");
//   }
// }

// var ravi = new Person("Ravi", 25, "Male", "Developer");
// console.log(ravi);

// class AcountDetails {
//   constructor(name, blance) {
//     this.accountNumber = Math.floor(Math.random() * 100000000000000);
//     this.name = name;
//     this.openingBalance = blance;
//   }
//   withdraw(withdraw) {
//     if (withdraw > this.openingBalance) {
//       console.log("Insufficient Balance");
//     } else {
//       this.openingBalance -= withdraw;
//       console.log("Amount Withdrawn Successfully");
//     }
//   }
//   deposit(deposit) {
//     this.openingBalance += deposit;
//     console.log("Amount Deposited Successfully");
//   }
// }

// var account_01 = new AcountDetails("Ravi", 10000);
// var account_02 = new AcountDetails("kumar", 50000);

// account_01.withdraw(400);
// account_02.deposit(3100);
// console.log(account_01);
// console.log(account_02);

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Order {
  constructor(orderId, products, customerName) {
    this.orderId = orderId;
    this.products = products;
    this.customerName = customerName;
  }

  calculateTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  filterProductsByCategory(category) {
    return this.products.filter((product) => product.category == category);
  }

  applyDiscount(discountPercentage) {
    return this.products.map((product) => ({
      ...product,
      price: product.price - product.price * (discountPercentage / 100),
    }));
  }
}

const p1 = new Product(1, "Laptop", 22000, "Electronics");
const p2 = new Product(2, "Mobile", 12000, "Electronics");
const p3 = new Product(3, "Wireless Earphones", 3000, "Accessories");
const p4 = new Product(4, "Refigirator", 42000, "Home Appliances");

const order = new Order(101, [p1, p3, p2, p4], "Ravi Kumar");
console.log(order.customerName);

const totalOrderPrice = order.calculateTotalPrice();

console.log(totalOrderPrice);

const electronics = order.filterProductsByCategory("Electronics");
console.log(electronics);

const priceAfterDiscount = order.applyDiscount(10);
console.log(priceAfterDiscount);
