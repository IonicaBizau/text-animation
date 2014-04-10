var TextAnimation = require ("../index.js")
  , Overlap       = require ("overlap")
  , Asciimo       = require('asciimo').Figlet
  ;


Asciimo.write("World!", "starwars", function(art){
    TextAnimation.start({
        animate: "down-up"
      , text: "Hello,"
      , delay: 100
      , size: "40x30"
      , end: function (frames) {
            console.log(Overlap({
                who: frames[frames.length - 1]
              , with: art
              , where: {
                    x: 10
                  , y: 10
                }
            }));
        }
    });
});
