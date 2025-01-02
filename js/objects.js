// const car = {
//   brand: "ford",
//   model: "i10",
//   year: 2023,
//   info: function () {
//     console.log("I'm a car!", this);
//   },
//   //   info: () => {
//   //     console.log("I'm a car!", this);
//   //   },
// };

// car.info();

// console.log(car);
// console.log(car.model);
// console.log(car["model"]);
// car["year"] = 2022;
// console.log(car);

function Car(model, brand, year, color) {
  this.model = model;
  this.brand = brand;
  this.year = year;
  this.colzor = color;
  this.info = function () {
    //   value of this keyword will be object itself
    console.log("this : ", this);
  };
  //   this.info = () => {
  //     // value of this keyword will be  object itself
  //     console.log("this : ", this);
  //   };
}

// var c1 = new Car("i20", "hyundai", 2020, "red");
// var c2 = new Car("i20 sportz", "hyundai", 2022, "grey");
// // console.log(c1);
// // console.log(c2);

// c1.info();
// c2.info();

// const addition = (a, b) => {
//   console.log(this, a, b);
// };
// const addition = function (a, b) {
//   console.log(this, a, b);
// };
// function addition(a, b) {
//   console.log(this, a, b);
// }

// addition(12, 23);

// properties
// name , openingBalance
// assign a random account number of 14 digits

// deposit
// withdrawal
// withdrawal of more than the account balance should not be allowedo
// checkMMB

function Account(name, openingBalance) {
  this.accountName = name;
  this.bankBalance = openingBalance;
  this.accountNumber = Math.floor(Math.random() * 100000000000000);
  this.mmb = 10000;
  this.deposit = function (amount) {
    this.bankBalance += amount;
    console.log(
      `Deposit of ${amount} has been accepted!\nUpdated bank balance ${this.bankBalance}`
    );
  };
  this.withdrawal = function (amount) {
    while (amount > this.bankBalance) {
      amount = parseInt(
        prompt(
          `Enter an amount less than or equal to the bank balance\nAvailable Balanace : ${this.bankBalance}`
        )
      );
    }
    this.bankBalance -= amount;

    console.log(
      `Withdrawal of ${amount} has been Accepted!\nUpdated bank balance ${this.bankBalance}`
    );
    this.checkMMB();
  };

  this.checkMMB = function () {
    if (this.bankBalance < this.mmb) {
      console.log("****************");
      console.log(
        `NOTE : MINIMUM BALANCE ALERT\nPlease maintain a minimum balance of ${
          this.mmb
        }! You're ${this.mmb - this.bankBalance} short.`
      );
      console.log("****************");
    }
  };
}

var ravi = new Account("Ravi", 10000);

ravi.deposit(200000);

ravi.withdrawal(200000);

console.log(ravi);
