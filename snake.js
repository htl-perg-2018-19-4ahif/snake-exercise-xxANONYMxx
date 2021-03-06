var ansi = require('ansi');
var keypress = require('keypress');

var cursor = ansi(process.stdout);
cursor.hide();

var height = 16;
var width = 32;

var foodPosX;
var foodPosY;

var snakePosX = 1;
var snakePosY = 1;

var snakeDirection = 2;

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('keypress', InputHandler);

process.stdout.write('\x1bc');

printGameBoard();
//newFood();
//resetCursor();
updateGame();

function InputHandler(chunk,key){
    switch(key.name){
        case "up": snakeDirection = snakeDirectionChecker(1); break;
        case "right": snakeDirection = snakeDirectionChecker(2); break;
        case "down": snakeDirection = snakeDirectionChecker(3); break;
        case "left": snakeDirection = snakeDirectionChecker(4); break;
    }
}

function snakeDirectionChecker(direction){
    if(direction == 1 || direction != 3){
        snakeDirection = direction;
    }
    if(direction == 2 || direction != 4){
        snakeDirection = direction;
    }
    if(direction == 3 || direction != 1){
        snakeDirection = direction;
    }
    if(direction == 4 || direction != 2){
        snakeDirection = direction;
    }
}

function updateGame(){
    cursor.bg.white();
    cursor.goto(snakePosX, snakePosY).write(" ");
    if(snakeDirection == 1){
        snakePosY += 1;
    }
    if(snakeDirection == 2){
        snakePosX += 1;
    }
    if(snakeDirection == 3){
        snakePosY -= 1;
    }
    if(snakeDirection == 4){
        snakePosY -= 1;
    }
}

function moveSnake(){
    
}

function newFood(){
    foodPosX = Math.floor((Math.random()*width+1));
    foodPosY = Math.floor((Math.random()*height+1));
    cursor.bg.red();
    cursor.goto(width+1,height+1).write(" ");
}

function printGameBoard(){
    cursor.bg.grey();
    for(let i = 0; i<=width+1;i++){
        cursor.write(" ");
    }
    cursor.write("\n");
    for(let i = 1; i <= height; i++){
        cursor.bg.grey();
        cursor.write(" ");
        for(let j = 1; j <= width; j++){
            cursor.bg.white();
            cursor.write(" ");
        }
        cursor.bg.grey();
        cursor.write(" ");
        cursor.write("\n");
    }
    cursor.bg.grey();
    for(let i = 0; i<=width+1;i++){
        cursor.write(" ");
    }
    cursor.white("\n");
}