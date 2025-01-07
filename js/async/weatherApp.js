function fetchWeather(city) {
  var apiKey = `3ed1a8944ae36bde087adc8f67d0f04a`;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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

fetchWeather("gurgaon")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
