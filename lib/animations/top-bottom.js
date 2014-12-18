// Dependencies
var Overlap = require("overlap");

// Top Bottom Animation
module.exports = function (options) {
    var box = options.box.toString()
      , frames = []
      , splits = options.rText.split("\n")
      , x = options.box.settings.width / 2 - splits[0].length / 2
      ;

    for (var y = 1; y < options.box.settings.height - splits.length + 2; ++y) {
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
