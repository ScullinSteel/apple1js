var Apple1 = require('./apple1');
var KeyBoard = require('./keyboard');

var main = new Apple1({
    screenCanvas: document.querySelector('#screen')
});

var cpu = main.getCPU();
var io = main.getIO();
var textpage = main.getTextPage();

// Keyboard Input
var keyboard = new KeyBoard(io, cpu, textpage);
keyboard.create(document.querySelector('#keyboard'));

module.exports = main;
