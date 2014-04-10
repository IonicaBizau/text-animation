//var sys = require('sys');
//var asciimo = require('asciimo').Figlet;
//var colors = require('colors'); // add colors for fun
//
//// pick the font file
//var font = 'usaflag';
//// set text we are writeing to turn into leet ascii art
//var text = "hello, i am asciimo";
//
//asciimo.write(text, font, function(art){
//    sys.puts(art.magenta);
//    var anotherFont = 'starwars';
//    var moreText = "Happy Birthday!";
//
//    asciimo.write(moreText, anotherFont, function(art){
//        sys.puts(art.red);
//        var anotherFont = 'Colossal';
//        var moreText = "400+ fonts supported";
//
//        asciimo.write(moreText, anotherFont, function(art){
//            sys.puts(art.green);
//            var anotherFont = 'tinker-toy';
//            var moreText = "Marak Squires 2010";
//
//            asciimo.write(moreText, anotherFont, function(art){
//                sys.puts(art.yellow);
//                sys.puts('if you can\'t see the text try making your console larger'.red.underline)
//            });
//        });
//    });
//});

var TextAnimation = {};
TextAnimation.start = function (options) {
    // TODO checks

    options.size = options.size.split("x");
    options.size = {
        width: options.size[0]
      , height: options.size[1]
    };

    var screen = createScreen (options.size.width, options.size.height);
    console.log(screen);
};

function createScreen (w, h) {
    var screen = "╔";
    for (var i = 0; i < w-2; ++i) {
        screen += "═══";
    }
    screen += "╗";
    for (var i = 0; i < h; ++i) {
        screen += "\n║";
        for (var ii = 0; ii < w - 2; ++ii) {
            screen += "   ";
        }
        screen += "║";
    }
    screen += "\n╚";
    for (var i = 0; i < w-2; ++i) {
        screen += "═══";
    }
    screen += "╝";
    return screen;
}

module.exports = TextAnimation;
