// Dependencies
var Figlet = require("figlet")
  , CliFrames = require("cli-frames")
  , CliBox = require("cli-box")
  ;

/**
 * TextAnimation
 * Creates the animation with provided text.
 *
 * @name TextAnimation
 * @function
 * @param {String|Object} options The string value with the text that
 * you want to animate or an object containing the following fields:
 *
 *  - `text` (String): The text that you want to animate.
 *
 *  - `end` (Function): The handler that will be called when the animation
 *    is eneded. If the `callback` parameter is provided, then this
 *    field will be overridden (default: an empty function).
 *
 *  - `animation` (String): The animation type. Actually, this is one of
 *    filenames from `lib/animations` directory (default: `"bottom-top"`).
 *
 *  - `delay` (Number): The frame delay in milliseconds (default: `100`).
 *
 *  - `size` (String): The size of the box in the following format: `WIDTHxHEIGHT`.
 *     If this is not provided, the box will take the fullscreen size.
 *
 *  - `font` (String): The text font (default: `"Graffiti"`).
 *
 *  Additional fields are added to `options` object:
 *
 *  - `size` (Array): The provided string is splitted and the value will be an array.
 *  - `box` (CliBox): The CliBox wrapper object.
 *  - `rText` (String): The rendered text using the Figlet lirary. This is added asynchronously.
 *
 * @param {Function} callback The callback function.
 * @return {undefined}
 */
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
        options.size = options.size.split("x").map(function (c) {
            return parseInt(c);
        });
        boxOptions.width = options.size[0];
        boxOptions.height = options.size[1];
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

        new CliFrames({
            frames: frames
          , autostart: {
                delay: options.delay
              , end: function (err) {
                    options.end(err, frames);
                }
            }
        });
    });
};
