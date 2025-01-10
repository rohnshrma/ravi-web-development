// selectors
const textDisplay = document.getElementById("textDisplay");
const inputField = document.getElementById("inputField");
const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");

let text = "";
let timer = 0;
let interval = null;
let isRunning = false;

async function fetchRandomSentence() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    text = data.content;
    console.log(text);
    displayText();
  } catch (err) {
    text = "An Error Occurred. Please Try Again.";
    displayText();
  }
}

function displayText() {
  textDisplay.innerHTML = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char.toLowerCase();
    textDisplay.appendChild(span);
  });
}

startButton.addEventListener("click", () => {
  inputField.value = "";
  inputField.disabled = false;
  inputField.focus();
  timer = 60;
  timerDisplay.textContent = timer;
  resultDisplay.textContent = "";
  isRunning = true;
  startButton.disabled = true;
  fetchRandomSentence();

  interval = setInterval(updateTimer, 1000);
});

function updateTimer() {
  if (timer > 0) {
    timer--;
    timerDisplay.textContent = timer;
  } else {
    endTest();
  }
}

inputField.addEventListener("input", () => {
  const userInput = inputField.value;
  const spans = textDisplay.querySelectorAll("span");

  spans.forEach((span, index) => {
    if (userInput[index] == null) {
      span.classList.remove("correct", "incorrect");
    } else if (userInput[index] === span.textContent) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
    } else {
      span.classList.remove("correct");
      span.classList.add("incorrect");
    }
  });

  if (userInput.length === text.length) {
    endTest();
  }
});

function endTest() {
  clearInterval(interval);
  isRunning = false;
  inputField.disabled = true;
  startButton.disabled = false;

  const userInput = inputField.value.toLowerCase();
  const correctChars = text
    .split("")
    .filter((char, index) => char === userInput[index]).length;
  const accuracy = ((correctChars / text.length) * 100).toFixed(2);
  const wpm = ((userInput.length / 5 / (60 - timer)) * 60).toFixed(2); // Calculate WPM based on time elapsed

  resultDisplay.innerHTML = `<b>WPM:</b> ${wpm}, <b>Accuracy:</b> ${accuracy}%, <b>Errors:</b> ${
    text.length - correctChars
  }`;
}
