/* Copyright 20102016 Will Scullin <scullin@scullinsteel.com>
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation.  No representations are made about the suitability of this
 * software for any purpose.  It is provided 'as is' without express or
 * implied warranty.
 */

var debug = require('debug')('apple1js:keyboard');
var Util = require('../util');
var toHex = Util.toHex;

// keycode: [plain, cntl, shift]

var keymap = {
    // Most of these won't happen
    0x00: [0x00, 0x00, 0x00], // 
    0x01: [0x01, 0x01, 0x01], // 
    0x02: [0x02, 0x02, 0x02], // 
    0x03: [0x03, 0x03, 0x03], // 
    0x04: [0x04, 0x04, 0x04], // 
    0x05: [0x05, 0x05, 0x05], // 
    0x06: [0x06, 0x06, 0x06], // 
    0x07: [0x07, 0x07, 0x07], // 
    0x08: [0x5f, 0x5f, 0x5f], // BS
    0x09: [0x09, 0x09, 0x09], // TAB
    0x0A: [0x0A, 0x0A, 0x0A], // 
    0x0B: [0x0B, 0x0B, 0x0B], // 
    0x0C: [0x0C, 0x0C, 0x0C], // 
    0x0D: [0x0D, 0x0D, 0x0D], // CR
    0x0E: [0x0E, 0x0E, 0x0E], // 
    0x0F: [0x0F, 0x0F, 0x0F], // 

    0x10: [0xff, 0xff, 0xff], // SHIFT
    0x11: [0xff, 0xff, 0xff], // CTRL
    0x12: [0xff, 0xff, 0xff], // OPTION
    0x13: [0x13, 0x13, 0x13], // 
    0x14: [0x14, 0x14, 0x14], // 
    0x15: [0x15, 0x15, 0x15], // 
    0x16: [0x16, 0x16, 0x16], // 
    0x17: [0x17, 0x17, 0x18], // 
    0x18: [0x18, 0x18, 0x18], // 
    0x19: [0x19, 0x19, 0x19], // 
    0x1A: [0x1A, 0x1A, 0x1A], // 
    0x1B: [0x1B, 0x1B, 0x1B], // ESC
    0x1C: [0x1C, 0x1C, 0x1C], // 
    0x1D: [0x1D, 0x1D, 0x1D], // 
    0x1E: [0x1E, 0x1E, 0x1E], // 
    0x1F: [0x1F, 0x1F, 0x1F], // 

    // Most of these besides space won't happen
    0x20: [0x20, 0x20, 0x20], // 
    0x21: [0x21, 0x21, 0x21], // 
    0x22: [0x22, 0x22, 0x22], // 
    0x23: [0x23, 0x23, 0x23], // 
    0x24: [0x24, 0x24, 0x24], // 
    0x25: [0x5f, 0x5f, 0x5f], // <- left
    0x26: [0x0B, 0x0B, 0x0B], // ^ up
    0x27: [0x15, 0x15, 0x15], // -> right
    0x28: [0x0A, 0x0A, 0x0A], // v down
    0x29: [0x29, 0x29, 0x29], // )
    0x2A: [0x2A, 0x2A, 0x2A], // *
    0x2B: [0x2B, 0x2B, 0x2B], // +
    0x2C: [0x2C, 0x2C, 0x3C], // , - <
    0x2D: [0x2D, 0x2D, 0x5F], // - - _
    0x2E: [0x2E, 0x2E, 0x3E], // . - >
    0x2F: [0x2F, 0x2F, 0x3F], // / - ?

    0x30: [0x30, 0x30, 0x29], // 0 - )
    0x31: [0x31, 0x31, 0x21], // 1 - !
    0x32: [0x32, 0x00, 0x40], // 2 - @
    0x33: [0x33, 0x33, 0x23], // 3 - #
    0x34: [0x34, 0x34, 0x24], // 4 - $
    0x35: [0x35, 0x35, 0x25], // 5 - %
    0x36: [0x36, 0x36, 0x5E], // 6 - ^
    0x37: [0x37, 0x37, 0x26], // 7 - &
    0x38: [0x38, 0x38, 0x2A], // 8 - *
    0x39: [0x39, 0x39, 0x28], // 9 - (
    0x3A: [0x3A, 0x3A, 0x3A], // :
    0x3B: [0x3B, 0x3B, 0x3A], // ; - :
    0x3C: [0x3C, 0x3C, 0x3C], // <
    0x3D: [0x3D, 0x3D, 0x2B], // = - +
    0x3E: [0x3E, 0x3E, 0x3E], // >
    0x3F: [0x3F, 0x3F, 0x3F], // ?

    // Alpha and control
    0x40: [0x40, 0x00, 0x40], // @
    0x41: [0x41, 0x01, 0x41], // A
    0x42: [0x42, 0x02, 0x42], // B
    0x43: [0x43, 0x03, 0x43], // C - BRK
    0x44: [0x44, 0x04, 0x44], // D
    0x45: [0x45, 0x05, 0x45], // E
    0x46: [0x46, 0x06, 0x46], // F
    0x47: [0x47, 0x07, 0x47], // G - BELL
    0x48: [0x48, 0x08, 0x48], // H
    0x49: [0x49, 0x09, 0x49], // I - TAB
    0x4A: [0x4A, 0x0A, 0x4A], // J - NL
    0x4B: [0x4B, 0x0B, 0x4B], // K - VT 
    0x4C: [0x4C, 0x0C, 0x4C], // L
    0x4D: [0x4D, 0x0D, 0x4D], // M - CR
    0x4E: [0x4E, 0x0E, 0x4E], // N
    0x4F: [0x4F, 0x0F, 0x4F], // O

    0x50: [0x50, 0x10, 0x50], // P
    0x51: [0x51, 0x11, 0x51], // Q
    0x52: [0x52, 0x12, 0x52], // R
    0x53: [0x53, 0x13, 0x53], // S
    0x54: [0x54, 0x14, 0x54], // T
    0x55: [0x55, 0x15, 0x55], // U
    0x56: [0x56, 0x16, 0x56], // V
    0x57: [0x57, 0x17, 0x57], // W
    0x58: [0x58, 0x18, 0x58], // X
    0x59: [0x59, 0x19, 0x59], // Y
    0x5A: [0x5A, 0x1A, 0x5A], // Z
//    0x5B: [0x5B, 0x1B, 0x5B], // [ - ESC
//    0x5C: [0x5C, 0x1C, 0x5C], // \
//    0x5D: [0x5D, 0x1D, 0x5D], // ]
    0x5E: [0x5E, 0x1E, 0x5E], // ^
    0x5F: [0x5F, 0x1F, 0x5F], // _

    // Stray keys
    0xBA: [0x3B, 0x3B, 0x3A], // ; - :
    0xBB: [0x3D, 0x3D, 0x2B], // = - +
    0xBC: [0x2C, 0x2C, 0x3C], // , - <
    0xBD: [0x2D, 0x2D, 0x5F], // - - _
    0xBE: [0x2E, 0x2E, 0x3E], // . - >
    0xBF: [0x2F, 0x2F, 0x3F], // / - ?
    0xDB: [0x5B, 0x5B, 0x5B], // [
    0xDC: [0x5C, 0x5C, 0x5C], // \
    0xDD: [0x5D, 0x5D, 0x5D], // ]
    0xDE: [0x27, 0x27, 0x22], // ' - '

    0xFF: [0xFF, 0xFF, 0xFF] // No comma line
};

function KeyBoard(_io, _cpu, _textpage) {
    var keys = 
        [[['1','2','3','4','5','6','7','8','9','0',':','-','reset'],
          ['esc','Q','W','E','R','T','Y','U','I','O','P','feed','return'],
          ['ctrl','A','S','D','F','G','H','J','K','L',';','out','cls'],
          ['shift','Z','X','C','V','B','N','M',',','.','/','shift'],
          ['&nbsp;']],
         [['!','"','#','$','%','&','\'','(',')','0','*','=','reset'],
          ['esc','Q','W','E','R','T','Y','U','I','O','@','line','return'],
          ['ctrl','A','S','D','F','bell','H','J','K','L','+','rub','cls'],
          ['shift','Z','X','C','V','B','^','M','<','>','?','shift'],
          ['&nbsp;']]];
    
    var shifted = false;
    var controlled = false;
    
    var shiftKeys;
    var controlKey;

    return {
        mapKeyEvent: function keyboard_mapKeyEvent(evt) {
            var code = evt.keyCode;
         
            if (code in keymap) {
                return keymap[code][evt.shiftKey ? 2 : (evt.ctrlKey ? 1 : 0)];
            }
            
            debug('Unhandled key = ' + toHex(code));
            return 0xFF;
        },

        shiftKey: function keyboard_shiftKey(down) {
            shifted = down;
            if (down) {
                shiftKeys[0].classList.add('active');
                shiftKeys[1].classList.add('active');
            } else {
                shiftKeys[0].classList.remove('active');
                shiftKeys[1].classList.remove('active');
            }
        },

        controlKey: function keyboard_controlKey(down) {
            controlled = down;
            if (down) {
                controlKey.classList.add('active');
            } else {
                controlKey.classList.remove('active');
            }
        },

        create: function keyboard_create(keyboard) {
            var x, y, row, key, key1, key2, label, label1, label2, self = this;
            
            keyboard.classList.add('noselect');

            function buildLabel(k) {
                var span = document.createElement('span');
                span.innerHTML = k;
                if (k.length > 1 && k.substr(0,1) != '&')
                    span.classList.add('small');
                return span;
            }

            function _mouseup(evt) {
                evt.currentTarget.classList.remove('pressed');
            }

            function _mousedown(evt) {
                this.classList.add('pressed');
                var key = evt.currentTarget.dataset[shifted ? 'key2' : 'key1'];
                switch (key) {
                case 'bell':
                    key = 'G';
                    break;
                case 'return':
                    key = '\r';
                    break;
                case 'line': 
                case 'feed':
                    key = '\n';
                    break;
                case 'rub':
                case 'out':
                    key = '_'; // 0x5f
                    break;
                case '&nbsp;':
                    key = ' ';
                    break;
                case 'esc':
                    key = '\033';
                    break;
                default:
                    break;
                }
                
                if (key.length > 1) {
                    switch (key) {
                    case 'shift':
                        self.shiftKey(!shifted);
                        break;
                    case 'ctrl':
                        self.controlKey(!controlled);
                        break;
                    case 'reset':
                        _cpu.reset();
                        break;
                    case 'cls':
                        _textpage.clear();
                        break;
                    default:
                        break;
                    }
                } else {
                    if (controlled && key >= '@' && key <= '_') {
                        _io.keyDown(key.charCodeAt(0) - 0x40);
                    } else {
                        _io.keyDown(key.charCodeAt(0));
                    }
                }
            }

            for (y = 0; y < 5; y++) {
                row = document.createElement('div');
                row.classList.add('row');
                row.classList.add('row' + y);
                keyboard.appendChild(row);

                for (x = 0; x < keys[0][y].length; x++) {
                    key1 = keys[0][y][x];
                    key2 = keys[1][y][x];

                    label = document.createElement('div');
                    label1 = buildLabel(key1);
                    label2 = buildLabel(key2);

                    key = document.createElement('div');
                    key.classList.add('key');
                    key.classList.add('key-' + key1.replace(/[&#;]/g,''));

                    if (key1.length > 1) {
                        if (key1 != key2) {
                            key.classList.add('vcenter2');
                        } else if (key1.substr(0,1) != '&') {
                            key.classList.add('vcenter');
                        }
                    }
                    if (key1 != key2) {
                        key.classList.add('key-' + key2.replace(/[&;]/g,''));
                        label.appendChild(label2);
                        label.appendChild(document.createElement('br'));
                    }

                    label.appendChild(label1);
                    key.appendChild(label);
                    key.dataset.key1 = key1;
                    key.dataset.key2 = key2;
   
                    if (window.ontouchstart === undefined) {
                        key.addEventListener('mousedown', _mousedown);
                        key.addEventListener('mouseup', _mouseup);
                        key.addEventListener('mouseout', _mouseup);
                    } else {
                        key.addEventListener('touchstart', _mousedown);
                        key.addEventListener('touchend', _mouseup);
                        key.addEventListener('touchleave', _mouseup);
                    }

                    row.appendChild(key);
                }
            }
            shiftKeys = keyboard.querySelectorAll('.key-shift');
            controlKey = keyboard.querySelector('.key-ctrl');

            window.addEventListener('keydown', function(evt) {
                // Ignore command- or option- keys
                if (evt.metaKey || evt.altKey) {
                    return true;
                }

                if (evt.keyCode == 16) { // Shift
                    self.shiftKey(true);
                } else if (evt.keyCode == 17) { // Control
                    self.controlKey(true);
                } else {
                    // Keyboard Input
                    var mapped = self.mapKeyEvent(evt);
                    if (mapped != 0xff) {
                        _io.keyDown(mapped);
                    }
                }
                evt.preventDefault();
                return false;
            });

            window.addEventListener('keyup', function(evt) {
                if (evt.keyCode == 16) { // Shift
                    self.shiftKey(false);
                } else if (evt.keyCode == 17) { // Control
                    self.controlKey(false);
                }
                evt.preventDefault();
                return false;
            });

            /*
            var hiddenInput = document.querySelector('#hidden_input');

            function focusHiddenInput() {
                hiddenInput.value = '';
                hiddenInput.focus();
            }

            document.addEventListener('mouseup', focusHiddenInput);
            document.addEventListener('paste', function(evt) {
                _io.paste(evt.clipboardData.getData('text/plain'));
                focusHiddenInput();
                evt.preventDefault();
            });
            focusHiddenInput();
            */
        }
    };
}

module.exports = KeyBoard;
