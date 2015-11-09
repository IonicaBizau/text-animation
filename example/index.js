// Dependencies
var TextAnimation = require("../lib");

// Animate bottom-top
TextAnimation("Hello...", function (err) {
    if (err) throw err;
    // And then, top-bottom
    TextAnimation({
        text: "...World!"
      , animation: "top-bottom"
    });
});
