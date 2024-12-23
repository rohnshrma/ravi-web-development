async function getRandomWord() {
  try {
    let response = await fetch("https://random-word-api.herokuapp.com/word");
    let data = await response.json();
    return data[0].toUpperCase();
  } catch (err) {
    console.error("Error fetching the random word:", err);
    return "DEFAULT"; // Fallback word in case of an error
  }
}

async function startGame() {
  try {
    var word = await getRandomWord();
    var displayWord = "";
    var wrongGuesses = "";
    var maxAttempts = word.length + 5;
    var attemptsLeft = maxAttempts;
    var guessedCorrectly = false;

    // Initialize the displayWord with underscores
    for (var i = 0; i < word.length; i++) {
      displayWord += "_ ";
    }
    console.log("Word to guess:", displayWord.trim());

    // Main game loop
    while (attemptsLeft > 0 && displayWord.includes("_ ")) {
      var guess = prompt("Guess a letter: ").toUpperCase();

      // Validate input
      if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
        console.log("Invalid input. Please enter a single character only.");
        continue;
      }

      guessedCorrectly = false;
      var updatedDisplayWord = "";

      // Update displayWord based on the guessed letter
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          updatedDisplayWord += guess + " ";
          guessedCorrectly = true;
        } else {
          updatedDisplayWord += displayWord[i * 2] + " "; // Preserve existing letters/underscores
        }
      }

      displayWord = updatedDisplayWord;

      if (guessedCorrectly) {
        console.log("Good guess!");
      } else {
        if (!wrongGuesses.includes(guess)) {
          wrongGuesses += guess + " ";
          attemptsLeft--;
        } else {
          console.log("You've already guessed this letter.");
        }
        console.log("Wrong guess! Attempts left:", attemptsLeft);
      }

      // Display the current state of the game
      console.log("Word: " + displayWord.trim());
      console.log("Wrong guesses: " + wrongGuesses.trim());
    }

    // Check win/loss condition
    if (!displayWord.includes("_ ")) {
      console.log("Congratulations! You've guessed the word: " + word);
    } else {
      console.log("Game over! The word was: " + word);
    }
  } catch (err) {
    console.log("Something went wrong");
  }
}

startGame();
