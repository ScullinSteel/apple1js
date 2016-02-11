var Apple1 = require('./apple1');
var KeyBoard = require('./ui/keyboard');
var Player = require('./ui/player');
var tapes = require('./tapes');

var player = new Player();
var main = new Apple1({
    aciCallbacks: player,
    screenCanvas: document.querySelector('#screen')
});

var cpu = main.getCPU();
var io = main.getIO();
var aci = main.getACI();
var textpage = main.getTextPage();

// Keyboard Input
var keyboard = new KeyBoard(io, cpu, textpage);
keyboard.create(document.querySelector('#keyboard'));
player.create(document.querySelector('#player'), io, cpu, aci);

function loadTape(name, turbotape) {
    var label = document.querySelector('#player_label');

    var tape = tapes[name];
    if (tape) {
        player.load(tape, turbotape);
        label.innerText = tape.name;
    } else {
        cpu.reset();
        label.innerText = '';
    }
}

module.exports = {
    loadTape: loadTape
};
