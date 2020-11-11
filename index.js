
//How do I return a position without making a whole new board?
function initializeBoard(){
  var rows = new Array(8)

  for (var i = 0; i < 7; i++){
    rows[i] = "----------------";
  }

  //initialize the default chess board
  rows[0] = "wRwkwBwKwQwBwkwR";
  rows[7] = "bRbkbBbKbQbBbkbR";
  rows[1] = "wPwPwPwPwPwPwPwP";
  rows[6] = "bPbPbPbPbPbPbPbP";
  
  return rows;
}
//Make a board and have a function that manipulates the spaces in the board. and then have a function that returns the values of the positions that we want.
function displayBoard(board){
  for (var i = 0; i < 8; i++){
    var eightChar = "";
    for (var j = 0; j < 16; j += 2){
      eightChar += board[i][j] + board[i][j+1] + " ";
    }
    console.log(eightChar);
  }
}

function chess (){
  var chessBoard = initializeBoard();
  displayBoard(chessBoard);
  return chessBoard;
}

function move(chessBoard, x, y){
  var piece = chessBoard[x][y];
  chessBoard[x][y] = "--"
  
}
/*chess board. how Ryan envisions the chess board
RKBQKBKR
PPPPPPPP
--------
--------
--------
--------
PPPPPPPP
RKBKQBKR
*/