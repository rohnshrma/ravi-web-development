// tic tac toe

var test_board = ["#", "X", "O", "X", "O", "X", "O", "X", "O", "X"];

function displayBoard(board) {
  console.log(`${board[7]} | ${board[8]} | ${board[9]}`);
  console.log("---------");
  console.log(`${board[4]} | ${board[5]} | ${board[6]}`);
  console.log("---------");
  console.log(`${board[1]} | ${board[2]} | ${board[3]}`);
}

// displayBoard(["#", "X", "O", "X", "O", "X", "O", "X", "O", "X"]);

function playerChoice() {
  var choice = prompt('Enter your choice "X" or "O" :').toLowerCase();
  while (choice !== "x" && choice !== "o") {
    choice = prompt('Please choose Between "X" or "O" :').toLowerCase();
  }
  if (choice == "x") {
    return ["X", "O"];
  } else {
    return ["O", "X"];
  }
}

// var [player1_marker, player2_marker] = playerChoice();
// console.log(player1_marker, player2_marker);

function placeMarker(board, position, marker) {
  board[position] = marker;
}

// placeMarker(test_board, 2, "X");
// displayBoard(test_board);

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

// displayBoard(test_board);
// console.log(winCheck(test_board, "X"));

// choose first
function choose_first() {
  var choice = Math.round(Math.random());
  if (choice === 0) {
    return "Player 1";
  } else {
    return "Player 2";
  }
}

// turn = choose_first();
// console.log(turn);

function spaceCheck(board, position) {
  return board[position] === " ";
}
// console.log(spaceCheck(test_board, 1));

// placeMarker(test_board, 2, " ");

// console.log(spaceCheck(test_board, 2));

function fullBoardCheck(board) {
  for (var i = 0; i < board.length; i++) {
    if (spaceCheck(board, i)) {
      return false;
    }
  }
  return true;
}

// placeMarker(test_board, 1, " ");
console.log(fullBoardCheck(test_board));
displayBoard(test_board);
