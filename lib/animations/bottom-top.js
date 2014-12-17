// Dependencies
var Overlap = require("overlap");

// Bottom Top Animation
module.exports = function (options) {
    var box = options.box.toString()
      , frames = []
      , splits = options.rText.split("\n")
      , x = options.box.settings.width / 2 - splits[0].length / 2
      , y = options.box.settings.height - splits.length + 2
      ;

    for (; y > 1; --y) {
        frames.push(Overlap({
            who: box
          , with: options.rText
          , where: {
                x: x
              , y: y
            }
        }).trim());
    }

    return frames;
};
