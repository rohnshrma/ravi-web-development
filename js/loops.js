// fixed iteration
// initialization | condition | update (increment | descrement)

// for(initialization ; condition ; update){
// code to be executed
// }

// for (var i = 1; i < 11; i++) {
//   console.log("hello world");
// }
// for (var i = 1; i < 11; i++) {
//   console.log("hello world", i);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log("hello world", i);
// }

// divisible by 3 : fizz
// divisible by 5 : buzz
// divisible by 5 & 3 : fizzbuzz
// var score = {};

// var txt = "hello world this is ravi kumar";
// first character is on the 0th index
// last character is on the str.length - 1 index

// for (var i = 0; i < txt.length; i++) {
//   var char = txt[i];
//   if (score[`${char}`]) {
//     score[`${char}`] += 1;
//   } else {
//     score[`${char}`] = 1;
//   }
// }

// console.log(score);

// var n = 10;
// for (var i = 0; i <= 10; i++) {
//   console.log(`${n} x ${i} = ${n * i}`);
// }

// var marks = [12, 34, 45, 6, 889, 45, 56];

// marks.push(34);
// marks.pop();

// initialization | condition | update

// var i = 0
// while (condition){
// code to be executed
// i++
// i+=1
// }

// var marks = [12, 34, 4, 67, 89, 67];

// var max = marks[0];

// var i = 0;
// while (i < marks.length) {
//   var currentMark = marks[i];

//   if (currentMark > max) {
//     max = currentMark;
//   }

//   i++;
// }

// console.log(max);

// var marks = [12, 34, 4, 67, 89, 67];

// var max = marks[0],
//   i = 0;

// while (i < marks.length) max = Math.max(max, marks[i++]);
// console.log(max);

// var email = prompt("Enter your email : ").toLowerCase();
// while (email.length < 8 || !email.includes("@") || !email.endsWith(".com"))
//   email = prompt("Enter your email : ").toLowerCase();

// console.log(email);

// ============= approach 1

// var isValid = false;

// while (!isValid) {
//   var password = prompt(
//     "Enter a password (must contain 1 number, 1 capital letter and 1 special character ) : "
//   );
//   var hasNumber = false;
//   var hasUpperCase = false;
//   var hasSpecialSymbol = false;

//   for (var i = 0; i < password.length; i++) {
//     var char = password[i];
//     if (char >= "0" && char <= "9") hasNumber = true;
//     else if (char >= "A" && char <= "Z") hasUpperCase = true;
//     else if (char.match(/[^a-zA-Z0-9]/)) hasSpecialSymbol = true;
//     if (hasNumber && hasUpperCase && hasSpecialSymbol) {
//       isValid = true;
//       break;
//     }
//   }

//   if (!isValid) {
//     alert(`Invalid password.Please try again`);
//   } else {
//     alert("Password accepted");
//   }
// }

// var isValid = false;
// while (!isValid) {
//   var password = prompt(
//     "Enter a password (must contain 1 number, 1 capital letter and 1 special character ) : "
//   );

//   if (
//     /[A-Z]/.test(password) &&
//     /\d/.test(password) &&
//     /[!@#$%^&*()_+{}|<>?~`]/.test(password)
//   ) {
//     isValid = true;
//     alert("Valid Password");
//   } else {
//     alert("Invalid Password");
//   }
// }


