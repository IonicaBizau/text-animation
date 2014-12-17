var TextAnimation = require("../index");

TextAnimation.start({
    animate: "down-up"
  , text: "Hello World!"
  , delay: 100
  , size: "40x30"
  , end: function (frames) {
        Util.print("\u001b[2J\u001b[0;0H");
        console.log(frames[frames.length - 1]);
        setTimeout (function () {}, 1000);
    }
});
