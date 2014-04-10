var sys = require('sys');
var asciimo = require('asciimo').Figlet;
var colors = require('colors'); // add colors for fun
var Overlap = require ("overlap");

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

    var screen = createScreen (options.size.width, options.size.height)
      , font = options.font || 'usaflag'
      , text = options.text
      ;

    asciimo.write(text, font, function(art){

        console.log(Overlap ({
            who: screen
          , with: art
          , where: {
                x: 3
              , y: 4
            }
        }));
    });
};


module.exports = TextAnimation;
