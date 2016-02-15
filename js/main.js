var debugLib = require('debug');
var debug = debugLib('apple1js:main');

window.debugLib = debugLib;

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

var menu = document.querySelector('#tape_menu');

function loadTape(name, turbotape) {
    var tape = tapes[name];
    if (tape) {
        document.location.hash = '#' + name;
        player.load(tape, turbotape);
        menu.value = name;
    } else {
        cpu.reset();
    }
}

function loadFile(file) {
    player.loadFile(file);
}

function menuCallback(event) {
    var name = event.target.value;
    if (name) {
        loadTape(name, false);
    }
}

menu.onchange = menuCallback;
var item = document.createElement('option');
item.innerText = 'Select...';
item.value = '';
menu.appendChild(item);

for (var name in tapes) {
    if (tapes.hasOwnProperty(name)) {
        debug('Adding', name);
        item = document.createElement('option');
        item.innerText = tapes[name].name;
        item.value = name;
        menu.appendChild(item);
    }
}

module.exports = {
    loadTape: loadTape,
    loadFile: loadFile
};
