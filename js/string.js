// sequence of characters(alpha , num , special symbols & whitespace) enclosed in single(' ') , double quotes(" ") or bacticks(` `)

var txt = "hello world this is ravi and he is a web developer.";

// var first = prompt("Enter your first name");
// var last = prompt("Enter your last name");
// var age = parseInt(prompt("Enter your age "));

// console.log(txt + " " + first + " " + last + ".i am " + age + " years old.");

// template literal | string literal
// console.log(
//   `${txt} my name is ${first} ${last}.i am ${
//     age > 18 ? "Jawan" : "baccha"
//   } years old.`
// );

// console.log(txt.length);

// indexing : counting starting from 0 used to access character of a string | iterable
// the first character is always on the 0th position
// the last character is always on the str.length - 1 position
//
// console.log(txt[txt.length - 1]);

// console.log(txt.substring(0, 4)); // 0-3 (exclusive)

// console.log(txt.slice(0, 4)); // 0-3

// console.log(txt.charAt(4));
// console.log(txt.at(4));

// console.log(txt.charAt(-4));
// console.log(txt.at(-4));

// console.log(txt.concat(" this is", " rohan sharma."));
// console.log(txt.concat(" ", "this is", " ", "rohan sharma."));

// console.log(txt.indexOf("a"));
// console.log(txt.indexOf("a", 22)); // substr , position(inclusive)
// console.log(txt.indexOf("a", 22)); // substr , position(inclusive)
// console.log(txt.indexOf("z"));

// console.log(txt.includes("a"));
// console.log(txt.includes("a", 22));

// console.log(txt.includes("z"));

// MCDONALDS : McDonalds
// mcdonalds : McDonalds
// mCdOnAlDs : McDonalds

// console.log(txt.lastIndexOf("a"));

// console.log(txt.length);
// console.log(txt.padStart(67));
// console.log(txt.padStart(67, "$%").padEnd(80, "*&").length);

// console.log("           rohan sharma        ".trim());
// console.log("           rohan sharma        ".trimStart());
// console.log("           rohan sharma        ".trimEnd());
// console.log("           rohan          sharma        ".trim());

// console.log("           rohan          sharma        ".replace(/ /g, "x"));
// console.log("           rohan          sharma        ".replace(/ /g, ""));

// var num = 123;
// console.log(num.toString());

// var marks = [1, 2, 3];
// console.log(marks.toString());

// var x = String.toString(123);
// console.log(x);

// x = marks.join("-");
// console.log(x);

// in python
// var x = "*".join(marks);
// console.log(x);

// console.log(txt.split());
// console.log(txt.split(" "));
// console.log(txt.split(""));
// console.log(txt.split("", 3));

// console.log(txt.slice(4)); // 4 : end
// console.log(txt.slice(4, 10)); // 4 : 9

// console.log(
//   "                   rohan sharma                  ".replaceAll(" ", "X")
// );

// console.log(
//   "                   rohan sharma                  ".replaceAll(" ", "X")
// );

// console.log(txt.search);

// console.log(txt.search("is"));

// console.log(txt.match("a"));
// console.log(txt.match(/a/g));

// ? pending
// value of
// var x = txt.matchAll(/a/g);

// var x = new String("hello world");

// var car = {
//   model: "ford ",
// };

// console.log(x.valueOf());

// console.log(car.valueOf());

// txt.valueOf()
