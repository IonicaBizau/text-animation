var sys = require('sys');
var asciimo = require('asciimo').Figlet;
var colors = require('colors'); // add colors for fun
var Overlap = require ("overlap");
var AsciiFrames = require ("ascii-frames");

function createScreen (w, h) {
    var screen = "╔";
    for (var i = 0; i < w-2; ++i) {
        screen += "═══";
    }
    screen += "╗";
    for (var i = 0; i < h; ++i) {
        screen += "\n║";
        for (var ii = 0; ii < w - 2; ++ii) {
            screen += "   ";
        }
        screen += "║";
    }
    screen += "\n╚";
    for (var i = 0; i < w-2; ++i) {
        screen += "═══";
    }
    screen += "╝";
    return screen;
}

var TextAnimation = {};
TextAnimation.start = function (options) {

    // TODO checks

    options.size = options.size.split("x");
    options.size = {
        width: options.size[0]
      , height: options.size[1]
    };
    options.end = options.end || function () {};

    var screen = createScreen (options.size.width, options.size.height)
      , font = options.font || 'usaflag'
      , text = options.text
      , frames = []
      ;

    asciimo.write(text, font, function(art){

        if (options.animate === "down-up") {
            for (var y = options.size.height; y > 1; --y) {
                frames.push(Overlap ({
                    who: screen
                  , with: art
                  , where: {
                        x: 3
                      , y: y
                    }
                }));
            }
        }

        // create a new instance
        var animation = new AsciiFrames ();

        // load frames
        animation.loadFrames(frames);

        // and start animation
        animation.startAnimation({
            // 250 ms
            frameDelay: options.delay
        });

        setTimeout(function () {
            options.end (frames);
        }, (frames.length + 1) * options.delay);
    });
};

module.exports = TextAnimation;
