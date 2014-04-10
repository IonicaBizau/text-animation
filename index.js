// dependencies
var Jasciimo = require('jasciimo').Figlet
  , Overlap = require ("overlap")
  , AsciiFrames = require ("ascii-frames")
  ;

/**
 * This function creates an ASCII box providing the width and height
 *
 */
function createScreen (w, h) {

    // left top corner
    var screen = "╔";

    // top line
    for (var i = 0; i < w-2; ++i) {
        screen += "═══";
    }

    // top right corner
    screen += "╗";

    // the other lines
    for (var i = 0; i < h; ++i) {
        screen += "\n║";
        for (var ii = 0; ii < w - 2; ++ii) {
            screen += "   ";
        }
        screen += "║";
    }

    // left bottom corner
    screen += "\n╚";

    // lasst line
    for (var i = 0; i < w-2; ++i) {
        screen += "═══";
    }

    // right bottom corner
    screen += "╝";

    // finally return the generated screen
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

    Jasciimo.write(text, font, function(art){

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
