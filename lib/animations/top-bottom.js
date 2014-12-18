// Dependencies
var Overlap = require("overlap");

// Top Bottom Animation
module.exports = function (options) {
    var box = options.box.toString()
      , splits = options.rText.split("\n")
      , x = options.box.settings.width / 2 - splits[0].length / 2
      ;
    return function(frame) {
        var y = frame;
        // Animation end
        if (y >= options.box.settings.height - splits.length + 2)
            return false;
        // Generate frame
        return Overlap({
            who: box
          , with: options.rText
          , where: {
                x: x
              , y: y
            }
        }).trim();
    }
};
