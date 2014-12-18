// Dependencies
var Overlap = require("overlap");

// Bottom Top Animation
// Returns a string if the animation hasn't finished yet
// Otherwise returns false
module.exports = function (options) {
    var box = options.box.toString()
      , splits = options.rText.split("\n")
      , x = options.box.settings.width / 2 - splits[0].length / 2
      , y = options.box.settings.height - splits.length + 2
      ;
    return function(frame) {
        var yOffset = -frame;
        // Animation end
        if (y + yOffset < 1)
            return false;
        // Generate frame
        return Overlap({
            who: box
          , with: options.rText
          , where: {
                x: x
              , y: y + yOffset
            }
        }).trim();
    }
};
