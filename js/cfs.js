// var age = parseInt(prompt("Enter your age : "));

// if (condition){
//     // code to be executed
// }

// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   // the inside of the else  statment is only executed if all the condition above are false
//   console.log("Not Eligible");
// }

// var day = parseInt(prompt("Enter the day today : "));
// if (day == 0) {
//   console.log("Sunday");
// } else if (day == 1) {
//   console.log("Monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("Wednesday");
// } else if (day == 4) {
//   console.log("Thursday");
// } else if (day == 5) {
//   console.log("Friday");
// } else if (day == 6) {
//   console.log("Saturday");
// } else {
//   alert("Invalid Day");
//   console.log("Invalid Day");
// }

// if age is more than or equals to 18 : eligible to drive
// if age is less than 18 : not eligible  to drive
// if age is more than or equals to 60 : not fit to drive

// var age = parseInt(prompt("Enter your age : "));

// correct

// if (age >= 60) {
//   console.log("Not Fit to drive");
// } else if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }

// incorrect

// if (age >= 18) {
//   console.log("Eligible");
// } else if (age >= 60) {
//   console.log("Not Fit to drive");
// } else {
//   console.log("Not Eligible");
// }

var year = parseInt(prompt("Enter year : "));

(year % 4 == 0 && year % 100 != 0) || year % 400 == 0
  ? console.log("leap year")
  : console.log("Not A leap year");

// var isLeap =
//   (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false;
// console.log(isLeap);

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(`${year} is a leap year`);
// } else {
//   console.log(`${year} is not a leap year`);
// }

// nested conditions

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       alert(`${year} is a leap year`);
//     } else {
//       alert(`${year} is not a leap year`);
//     }
//   } else {
//     alert(`${year} is a leap year`);
//   }
// } else {
//   alert(`${year} is not a leap year`);
// }
