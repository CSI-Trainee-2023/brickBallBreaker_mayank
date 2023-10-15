//heigth and width of the board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;


window.onload = function(){
    board = document.getElementById("board"); //accessing canvas from the html and storing in variable name borad
    board.height = boardHeight;  //borad height
    board.width = boardWidth;    //board width
    context = board.getContext("2d");  // to do manupulation inside the board
}
