module.exports = function (options) {
    var box = options.box.toString();
      , frames = [];
      , x = options.box.settings.width / 2 - options.rText.split("\n")[0].length / 2
      , y = options.box.settings.height
      ;

    for (; y > 1; --y) {
        frames.push(Overlap({
            who: box
          , with: options.rText
          , where: {
                x: x
              , y: y
            }
        }));
    }

    return frames;
};
