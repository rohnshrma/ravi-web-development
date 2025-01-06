// const url = `https://jsonplaceholder.typicode.com/todos/3`;

// fetch(url)
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const myPromise = new Promise((resolve, reject) => {
//   var age = parseInt(prompt("Enter your age : "));
//   setTimeout(() => {
//     if (age >= 18) {
//       resolve("Eligible");
//     } else {
//       reject("Not eligible to vote");
//     }
//   }, 5000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

function checkEligibility(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Eligible");
      } else {
        reject("Not eligible to vote");
      }
    }, 5000);
  });
}

checkEligibility(23)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
