// selecting all the cells with querySelectorAll and additional variables that is needed 
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("resetButton");

//setting a boolean for player turns
let isXNext = true;

let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


//actual click event that handles the interaction 
const handleCellClick = event => {
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  if(board[index] !== '' || checkWinner()){
    return;
  }

  board[index] = isXNext ? 'X' : 'O';
  cell.textContent = board[index];

  if (checkWinner()) {
    alert(`${board[index]} wins!`);
  } else if (board.every(cell => cell !== '')) {
    alert ('It\'s a draw');
  }


  isXNext = !isXNext;
}


//function that checks the winner
const checkWinner = () => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board [a] === board[b] && board[a] === board[c] ){
      return true;
    }
  }
  return false;
}

const resetGame = () => {
  board =  ['', '', '', '', '', '', '', '', ''];
  isXNext = true;
  cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);