function square(color, type) {
  this.color = color;
  this.type = type;
}

class chess {
  constructor() {
    this.chessBoard = this.initializeBoard();
    this.displayBoard(this.chessBoard);
    //whose turn is it
    this.priority = "white";
    this.finish = 0;
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
    //this.displayBoard(this.chessBoard);
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
  move(m){
    

    //console.clear()

    var y1 = m[0].charCodeAt(0) - 97; //letter coordinate
    var x1 = 8 - m[1]; //number coordinate
    var y2 = m[2].charCodeAt(0) - 97; //letter coordinate
    var x2 = 8 - m[3]; //number coordinate
    
    var piece = this.chessBoard[x1][y1];

    //legality of moves
    //first check that correct player moved
    if(this.priority[0] != piece.color){
      console.log("Illegal move! Try again!");
      return;
    }
    
    //check win condition
    if(this.chessBoard[x2][y2].type == "K"){
      this.finish = 1;
    }

    this.chessBoard[x2][y2] = new square(piece.color, piece.type);
    this.chessBoard[x1][y1] = new square("-", "-");

    console.clear()
    this.displayBoard(this.chessBoard);

    //change priority
    this.priorityChange();
  }
  priorityChange(){
    if(this.priority == "white"){
      this.priority = "black";
    }
    else{
      this.priority = "white";
    }
  }
  startgame(){
    while(this.finish == 0){
      var choice = prompt("Please enter " + this.priority + "'s move (a1b1 format)");
      this.move(choice);
    }
    this.priorityChange();
    console.log(this.priority + " is the winner!");
  }
}

function start(){
  var game = new chess();
  game.startgame();
}

this.onload = start();