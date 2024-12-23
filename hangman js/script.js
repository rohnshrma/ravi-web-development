var words = [
  "javascript",
  "python",
  "diagram",
  "workspace",
  "diapers",
  "ghost",
  "apple",
];

var word = words[Math.floor(Math.random() * words.length) | 0].toUpperCase();

var displayWord = "";
var wrongGuesses = "";
var maxAttempts = 6;
var attempsLeft = maxAttempts;
var guessedCorrectly = false;

for (var i = 0; i < word.length; i++) {
  displayWord += "_ ";
}
console.log(displayWord, word);

while (attempsLeft > 0 && displayWord.includes("_ ")) {
  var guess = prompt("Guess a letter : ").toUpperCase();

  if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
    console.log("Invalid Input. Please enter a single character only.");
    continue;
  }

  guessedCorrectly = false;
  var updatedDisplayWord = "";

  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      updatedDisplayWord += guess + " ";
      guessedCorrectly = true;
    } else {
      updatedDisplayWord += displayWord[i * 2] + " ";
    }
  }

  displayWord = updatedDisplayWord;

  if (guessedCorrectly) {
    console.log("Good Guess");
  } else {
    if (!wrongGuesses.includes(guess)) {
      wrongGuesses += guess + " ";
      attempsLeft--;
    } else {
      console.log("You've already guessed this letter");
    }
    console.log("Wrong Guess! Attempts Left: " + attempsLeft);
  }

  console.log("Words:" + displayWord);
  console.log("Wrong Guesses: " + wrongGuesses);
}

if (!displayWord.includes("_ ")) {
  console.log("Congratulations! You've guessed the word correctly");
} else {
  console.log("You've run out of attempts. The word was: " + word);
}
