// var url = `https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious`;
// var request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState == 4 && request.status == 200) {
//     console.log(JSON.parse(request.responseText));
//   } else if (request.readyState == 4 && request.status != 200) {
//     console.error("Something went wrong");
//   }
// });

// request.open("GET", url);
// request.send();
const url = `https://jsonplaceholder.typicode.com/todos/3`;

function sendRequest(url, cb) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      cb(request.responseText, undefined);
    } else if (request.readyState == 4) {
      cb(undefined, "could not fetch the data");
    }
  });
}

sendRequest(url, (data, err) => {
  if (data && !err) {
    console.log(data);
    sendRequest(url, (data, err) => {
      if (data && !err) {
        console.log(data);
        sendRequest(url, (data, err) => {
          if (data && !err) {
            console.log(data);
            sendRequest(url, (data, err) => {
              if (data && !err) {
                console.log(data);
              } else {
                console.error(err);
              }
            });
          } else {
            console.error(err);
          }
        });
      } else {
        console.error(err);
      }
    });
  } else {
    console.error(err);
  }
});
