// Dependencies
var Figlet = require("figlet")
  , AsciiFrames = require("ascii-frames")
  , CliBox = require("cli-box")
  ;

// Constructor
var TextAnimation = module.exports = function (options, callback) {

    // TextAnimation("foo", callback);
    if (typeof options === "string") {
        options = {
            text: options
        };
    } else {
        options = Object(options);
    }

    // Add the end handler
    options.end = options.end || function (err) {
        if (err) {
            console.log(err);
        }
    };
    if (typeof callback === "function") {
        options.end = callback;
    }

    // Create the boxOptions
    var boxOptions = {
        marks: {
            nw: "╔"
          , n:  "═"
          , ne: "╗"
          , e:  "║"
          , se: "╝"
          , s:  "═"
          , sw: "╚"
          , w:  "║"
          , b: " "
        }
    };

    options.animation = options.animation || "bottom-top";
    options.delay = options.delay || 100;

    // Handle the provided size
    if (/^[0-9]+x[0-9]+$/.test(options.size)) {
        options.size = options.size.split("x");
        boxOptions.width = parseInt(options.size[0]);
        boxOptions.height = parseInt(options.size[1]);
    } else {
        boxOptions.fullscreen = true;
        process.stdout.columns = process.stdout.columns || 80;
        process.stdout.rows = process.stdout.rows || 60;
    }

    var box = options.box = new CliBox(boxOptions)
      , font = options.font || "Graffiti"
      , text = options.text
      , frames = []
      ;


    // Render the text
    Figlet.text(text, {
        font: font,
    }, function(err, data) {

        if (err) {
            return options.end(err, data);
        }

        options.rText = data;

        try {
            frames = require("./animations/" + options.animation)(options);
        } catch (e) {
            return options.end(e);
        }

        var animation = new AsciiFrames();
        animation.loadFrames(frames);
        animation.startAnimation({
            frameDelay: options.delay
        });

        setTimeout(function () {
            options.end(null, frames);
        }, (frames.length + 1) * options.delay);
    });
};
