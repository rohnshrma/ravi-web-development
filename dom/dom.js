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
// head.setAttribute("class", "red");

// head.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

// var head = document.querySelector("#head");

// head.innerHTML = "Hello <u>world</u>";

// console.log(head.textContent);

var contactForm = document.getElementById("contact");

// var contactFormButton = document
//   .getElementById("contact")
//   .querySelector("button");
var nameInput = document.querySelector(".email");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(nameInput.value);
//   console.log(contactForm.querySelector("input[name='name']").value);
// });

// console.log(nameInput.classList);

// nameInput.classList.add("grow");
// nameInput.classList.remove("grow");

// nameInput.className = "rotate";

// nameInput.id = "new_id";

// head.style.color = "Red";
// head.style.backgroundColor = "Red";

// head.style = "transform:scale(1.3);background-color:grey;";

// var image = document.querySelector(".image");
// console.log(image.attributes);
// console.log(image.getAttribute("src"));

// image.setAttribute("src", "xyz.com");

// image.src = "lohe ka aadmi.jpg";

// var link = document.querySelector("#my-link");

// link.href = "https://www.ironman.com";

// var policy = document.querySelector('[name = "policy"]');
// policy.checked = true;
// console.log(policy.checked);

// nameInput.addEventListener("input", (e) => {
//   var input = e.target.value;

//   input.length > 8 && input.includes("@") && input.endsWith(".com")
//     ? (contactFormButton.disabled = false)
//     : (contactFormButton.disabled = true);
// });

// console.log(contactForm.children[0]);
// console.log(contactForm.children[1]);

// for (let i = 0; i < contactForm.children.length; i++) {
//   console.log(contactForm.children[i].tagName);

//   console.log(
//     contactForm.children[i].tagName === "INPUT" ? "Input hai" : "Button hai"
//   );
// }
