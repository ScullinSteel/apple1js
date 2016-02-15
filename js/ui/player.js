function Player() {
    var _aci;
    var _cpu;
    var _io;
    var tape;
    
    return {
        create: function(player, io, cpu, aci) {
            tape = document.createElement('div');
            tape.id = 'tape';
            player.appendChild(tape);
            
            _aci = aci;
            _cpu = cpu;
            _io = io;
        },
        
        load: function(tape, turbotape) {
            _cpu.reset();
            if (turbotape) {
                var idx, trackIdx = 0, script = '';
                var parts = tape.script.split('\n');
                // Ignore part 0 (C100R)
                // Split part 1 into ranges
                var ranges = parts[1].split(' ');
                for (idx = 0; idx < ranges.length; idx++) {
                    var range = ranges[idx].split('.');
                    var start = parseInt(range[0], 16);
                    var end = parseInt(range[1], 16);
                    var track = tape.tracks[trackIdx];
                    var kdx = 0;
                    for (var jdx = start;  jdx <= end; jdx++) {
                        _cpu.write(jdx >> 8, jdx & 0xff, track[kdx++]);
                    }
                    trackIdx++;
                }
                // Execute parts 2-n 
                for (idx = 2; idx < parts.length; idx++) {
                    if (parts[idx]) {
                        script += parts[idx] + '\n';
                    }
                }
                tape.style.width = '100px';
                _io.paste(tape.script);
            } else {
                _aci.setData(tape.tracks);
                _io.paste(tape.script);
            }
        },

        loadFile: function(file) {
            _cpu.reset();
            var AC = window.webkitAudioContext || window.AudioContext;

            var fileReader = new FileReader();
            fileReader.onload = function(ev) {
                var context = new AC();
                context.decodeAudioData(ev.target.result, function(buffer) {
                    var buf = [];
                    var data = buffer.getChannelData(0);
                    var old = (data[0] > 0.25);
                    var last = 0;
                    for (var idx = 1; idx < data.length; idx++) {
                        var current = (data[idx] > 0.25);
                        if (current != old) {
                            var delta = idx - last;
                            buf.push(parseInt(delta / buffer.sampleRate * 1023000));
                            old = current;
                            last = idx;
                        }
                    }
                    _aci.buffer = buf;
                });
            };
            fileReader.readAsArrayBuffer(file);
        },

        progress: function (val) {
            tape.style.width = (val * 100) + 'px';
        }
    };
}

module.exports = Player;
