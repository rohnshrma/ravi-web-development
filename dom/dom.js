// selectors
// id

// var main = document.getElementById("main");
// var paragraphs = document.getElementsByClassName("para");
// var ps = document.getElementsByTagName("p");

// var first_para = document.querySelector(".para");
// var first_paragraph = document.querySelector("p");

// var all_paras = document.querySelectorAll(".para");
// var all_paragraphs = document.querySelectorAll("p");

// console.log(all_paras);
// console.log(all_paragraphs);
// console.log(main);
// console.log(paragraphs);
// console.log(ps);
// console.log(first_para);
// console.log(first_paragraph);

// [...paragraphs].forEach((para) => {
//   console.log(para);
// });

// all_paragraphs.forEach((para) => {
//   console.log(para);
// });

// console.log(all_paragraphs.item());
// console.log(all_paragraphs.values());
// console.log(all_paragraphs.keys());
// console.log(all_paragraphs.);

var head = document.querySelector("#head");
// console.log(head.innerHTML);
// console.log(head.innerText);

// head.innerText = "bye bye <u>world</u>";
// head.innerHTML = "bye bye <u>world</u>";

// console.log(head.attributes);
// console.log(head.getAttribute("id"));
head.setAttribute("class", "red");

head.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
