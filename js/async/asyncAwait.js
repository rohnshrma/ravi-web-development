// const url = `https://jsonplaceholder.typicode.com/todos/3`;
// async function handleData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// handleData(url);

function fetchWeather(city) {
  var apiKey = `3ed1a8944ae36bde087adc8f67d0f04a`;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState == 4 && request.status != 200) {
        reject(`Could not fetch weather of '${city}'`);
      }
    });

    request.open("GET", url);
    request.send();
  });
}

async function handleData(city) {
  try {
    const weatherData = await fetchWeather(city);
    console.log(weatherData["main"]["temp"]);
  } catch (err) {
    console.error(err);
  }
}

handleData("gurgaon");
handleData("noida");
handleData("agra");
handleData("tokyo");
handleData("bali");
handleData("jakarta");
