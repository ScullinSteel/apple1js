/* Copyright 2010-2015 Will Scullin <scullin@scullinsteel.com>
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that
 * copyright notice and this permission notice appear in supporting
 * documentation.  No representations are made about the suitability of this
 * software for any purpose.  It is provided 'as is' without express or
 * implied warranty.
 */

var hex_digits = '0123456789ABCDEF';
var bin_digits = '01';

function allocMem(size) {
    var result;
    if (window.Uint8Array) {
        result = new Uint8Array(size);
    } else {
        result = new Array(size);
    }
    return result;
}

function allocMemPages(pages) {
    return allocMem(pages * 0x100);
}

function toHex(v, n) {
    if (!n) {
        n = v < 256 ? 2 : 4;
    }
    var result = '';
    for (var idx = 0; idx < n; idx++) {
        result = hex_digits[v & 0x0f] + result;
        v >>= 4;
    }
    return result;
}

function toBinary(v) {
    var result = '';
    for (var idx = 0; idx < 8; idx++) {
        result = bin_digits[v & 0x01] + result;
        v >>= 1;
    }
    return result;
}

// From http://www.netlobo.com/url_query_string_javascript.html
function gup( name )
{
    name = name.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');
    var regexS = '[\\?&]'+name+'=([^&#]*)';
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( !results )
        return '';
    else
        return results[1];
}

function hup() {
    var regex = new RegExp('#(.*)');
    var results = regex.exec(window.location.hash);
    if ( !results )
        return '';
    else
        return results[1];
}
    
module.exports = {
    allocMemPages: allocMemPages,
    toBinary: toBinary,
    toHex: toHex,
    gup: gup,
    hup: hup
};
