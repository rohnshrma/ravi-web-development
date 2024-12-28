// tic tac toe

var board = ["#", " ", " ", " ", " ", " ", " ", " ", " ", " "];
var currentPlayer = "X";
var isGameActive = true;

const turnInfo = document.getElementById("turn-info");
const gameResult = document.getElementById("game-result");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");

function displayBoard() {
  cells.forEach((cell, i) => {
    if (i >= 0) {
      cell.textContent = board[i + 1];
    }
  });
}

function winCheck(board, marker) {
  return (
    (board[1] === marker && board[2] === marker && board[3] === marker) ||
    (board[4] === marker && board[5] === marker && board[6] === marker) ||
    (board[7] === marker && board[8] === marker && board[9] === marker) ||
    (board[1] === marker && board[4] === marker && board[7] === marker) ||
    (board[2] === marker && board[6] === marker && board[8] === marker) ||
    (board[3] === marker && board[6] === marker && board[9] === marker) ||
    (board[1] === marker && board[5] === marker && board[9] === marker) ||
    (board[3] === marker && board[5] === marker && board[7] === marker)
  );
}

function drawCheck(board) {
  return board.every((cell, index) => {
    index === 0 || cell !== " ";
  });
}

function handleCellClick(e) {
  if (!isGameActive) return;
  const index = parseInt(e.target.getAttribute("data-index"));
  if (board[index] !== " ") return;

  board[index] = currentPlayer;
  displayBoard();

  if (winCheck(board, currentPlayer)) {
    gameResult.textContent = `${currentPlayer} Wins!`;
    isGameActive = false;
  } else if (drawCheck(board)) {
    gameResult.textContent = "Game Draw!";
    isGameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnInfo.textContent = `${currentPlayer}'s turn`;
  }
}

function resetGame() {
  board = ["#", " ", " ", " ", " ", " ", " ", " ", " ", " "];
  currentPlayer = "X";
  isGameActive = true;
  gameResult.textContent = "";
  turnInfo.textContent = "Player X's Turn";
  displayBoard();
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);

displayBoard();
