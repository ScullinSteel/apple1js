/*jshint browser: true */
var CPU6502 = require('cpu6502');
var RAM = require('./ram');
var TextPage = require('./canvas1');
var Apple1IO = require('./apple1io');
var Basic = require('./basic');
var Bios = require('./bios');
var ACI = require('./aci');

var kHz = 1023;
var runTimer;
var _requestAnimationFrame;
var actualKhz;

if (typeof window !== 'undefined') {
    _requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
}

function Apple1(options) {

    function run() {
        if (runTimer) {
            clearInterval(runTimer);
        }

        var ival = 30;
        var stepMax = kHz * ival * 1.25;

        var now, last = Date.now();
        var runFn = function() {
            now = Date.now();

            var step = (now - last) * kHz;
            last = now;
            if (step > stepMax) {
                step = stepMax;
            }

            cpu.stepCycles(step);
            textpage.blit();

            if (_requestAnimationFrame) {
                _requestAnimationFrame(runFn);
            }
        };
        if (_requestAnimationFrame) {
            _requestAnimationFrame(runFn);
        } else {
            runTimer = setInterval(runFn, ival);
        }
    }

    var cpu = new CPU6502();

    var textpage = new TextPage();
    var ram = new RAM(0, 0x80);
    var basic = new Basic();
    var io = new Apple1IO(textpage);
    var bios = new Bios();
    var aci = new ACI(cpu, options.aciCallbacks);

    cpu.addPageHandler(ram);
    cpu.addPageHandler(io);
    cpu.addPageHandler(aci);
    cpu.addPageHandler(basic);
    cpu.addPageHandler(bios);

    var screen = options.screenCanvas;
    var context = screen.getContext('2d');

    textpage.setContext(context);
    textpage.init();

    run();

    return {
        getACI: function getACI() {
            return aci;
        },

        getCPU: function () {
            return cpu;
        },

        getIO: function getIO() {
            return io;
        },

        getTextPage: function getTextPage() {
            return textpage;
        },

        getKhz: function getKhz() {
            return actualKhz;
        }
    };
}

module.exports = Apple1;
