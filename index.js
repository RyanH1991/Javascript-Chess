/*function initializePieces(rows){
  var tempColor = "b"
  for (var i = 0; i < 8; i++){
    if (i === 0 || i === 7){
      rows[i][0].type = "R"
      rows[i][1].type = "k"
      rows[i][2].type = "B"
      rows[i][3].type = "Q"
      rows[i][4].type = "K"
      rows[i][5].type = "B"
      rows[i][6].type = "k"
      rows[i][7].type = "R"
    }
    for (var j = 0; j < 8; j++){
      rows[i][j].color = tempColor;
      if(i === 1 || i === 6){
        rows[i][j].type = "P";
      }
    }
    if (i === 1){
      i = 5;
      tempColor = "w";
    }
  }
  return rows;
}*/

/*function initializeBoard(){
  var rows = new Array(8)

  for (var i = 0; i < 8; i++){
    var column = new Array(8);
    rows[i] = column;
  }

  for (var j = 0; j < rows.length; j++){
    for (var k = 0; k < rows[j].length; k++){
      var temp = new square("-", "-");
      rows[j][k] = temp
    }
  }

  rows = initializePieces(rows);

  return rows;
}*/

function square(color, type) {
  this.color = color;
  this.type = type;
}
//Make a board and have a function that manipulates the spaces in the board. and then have a function that returns the values of the positions that we want.
/*function displayBoard(board){
  for (var i = 0; i < 8; i++){
    var pos = (8-i) + " ";
    //var pos = "";
    for (var j = 0; j < 8; j++){
      pos += board[i][j].color + board[i][j].type + " ";
    }
    console.log(pos);
  }
  console.log("   a  b  c  d  e  f  g  h")
}*/

function move(chessBoard, x1y1, x2y2){
  var x1 = x1y1[0].charCodeAt(0) - 97; //letter coordinate
  var y1 = 8 - x1y1[1]; //number coordinate
  var x2 = x2y2[0].charCodeAt(0) - 97; //letter coordinate
  var y2 = 8 - x2y2[1]; //number coordinate
  
  var piece = chessBoard[x1][y1];
  chessBoard[x2][y2] = new square(piece.color, piece.type);
  // chessBoard[x2][y2].color = piece.color;
  // chessBoard[x2][y2].type = piece.type;
  chessBoard[x1][y1] = new square("-", "-");
  // chessBoard[x1][y1].color = "-"
  // chessBoard[x1][y2].type = "-"
}

/*function chess() {
  //var chessBoard = initializeBoard();
  //displayBoard(chessBoard);

  //return chessBoard;
  this.chessBoard = initializeBoard(),
  displayBoard(chessBoard),
  
}*/

class chess {
  constructor() {
    this.chessBoard = this.initializeBoard();
    //displayBoard(chessBoard);
  }
  initializeBoard(){
    var rows = new Array(8)

    for (var i = 0; i < 8; i++){
      var column = new Array(8);
      rows[i] = column;
    }

    for (var j = 0; j < rows.length; j++){
      for (var k = 0; k < rows[j].length; k++){
        var temp = new square("-", "-");
        rows[j][k] = temp
      }
    }

    rows = this.initializePieces(rows);

    return rows;
  }
  displayBoard(){
    for (var i = 0; i < 8; i++){
      var pos = (8-i) + " ";
      //var pos = "";
      for (var j = 0; j < 8; j++){
        pos += this.chessBoard[i][j].color + this.chessBoard[i][j].type + " ";
      }
      console.log(pos);
    }
    console.log("   a  b  c  d  e  f  g  h")
  }
  initializePieces(rows){
    var tempColor = "b"
    for (var i = 0; i < 8; i++){
      if (i === 0 || i === 7){
        rows[i][0].type = "R"
        rows[i][1].type = "k"
        rows[i][2].type = "B"
        rows[i][3].type = "Q"
        rows[i][4].type = "K"
        rows[i][5].type = "B"
        rows[i][6].type = "k"
        rows[i][7].type = "R"
      }
      for (var j = 0; j < 8; j++){
        rows[i][j].color = tempColor;
        if(i === 1 || i === 6){
          rows[i][j].type = "P";
        }
      }
      if (i === 1){
        i = 5;
        tempColor = "w";
      }
    }
    return rows;
  }
}

//var myGame = new chess();
//myGame.move(a2,a4);

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