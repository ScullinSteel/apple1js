/* Copyright 20102016 Will Scullin <scullin@scullinsteel.com>
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation.  No representations are made about the suitability of this
 * software for any purpose.  It is provided "as is" without express or
 * implied warranty.
 */

var Util = require('./util');
var Base64 = require('./base64');
var allocMemPages = Util.allocMemPages;

function RAM(sp, ep) {
    var mem;
    var start_page = sp;
    var end_page = ep;

    mem = allocMemPages(ep - sp + 1);

    for (var page = 0; page <= ep; page++) {
        for (var off = 0; off < 0x100; off++) {
            mem[page * 0x100 + off] = 0; // Math.floor(Math.random()*256);
        }
    }

    return {
        start: function() {
            return start_page;
        },
        end: function() {
            return end_page;
        },
        read: function(page, off) {
            return mem[(page - start_page) * 0x100 + off];
        },
        write: function(page, off, val) {
            mem[(page - start_page) * 0x100 + off] = val;
        },

        getState: function() {
            return {
                start: start_page,
                end: end_page,
                mem: Base64.encode(mem)
            };
        },

        setState: function(state) {
            start_page = state.start;
            end_page = state.end;
            mem = Base64.decode(state.mem);
        }
    };
}

module.exports = RAM;
