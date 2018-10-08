var ansi = require('ansi');
var keypress = require('keypress');

var cursor = ansi(process.stdout);
var height = 32;
var width = 32;

var foodPosX;
var foodPosY;

var snakePosX;
var snakePosY;

var snakeDirection = 1;

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('keypress', InputHandler);

