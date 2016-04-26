
# text-animation [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/text-animation.svg)](https://www.npmjs.com/package/text-animation) [![Downloads](https://img.shields.io/npm/dt/text-animation.svg)](https://www.npmjs.com/package/text-animation) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Create beautiful ASCII text animations using NodeJS.

## :cloud: Installation

```sh
$ npm i --save text-animation
```


## :clipboard: Example



```js
// Dependencies
var TextAnimation = require("text-animation");

// Animate bottom-top
TextAnimation("Hello...", function (err) {
    if (err) throw err;
    // And then, top-bottom
    TextAnimation({
        text: "...World!"
      , animation: "top-bottom"
    });
});
```

## :memo: Documentation


### `TextAnimation(options, callback)`
Creates the animation with provided text.

#### Params
- **String|Object** `options`: The string value with the text that you want to animate or an object containing the following fields:

 - `text` (String): The text that you want to animate.

 - `end` (Function): The handler that will be called when the animation
   is eneded. If the `callback` parameter is provided, then this
   field will be overridden (default: an empty function).

 - `animation` (String): The animation type. Actually, this is one of
   filenames from `lib/animations` directory (default: `"bottom-top"`).

 - `delay` (Number): The frame delay in milliseconds (default: `100`).

 - `size` (String): The size of the box in the following format: `WIDTHxHEIGHT`.
    If this is not provided, the box will take the fullscreen size.

 - `font` (String): The text font (default: `"Graffiti"`).

 Additional fields are added to `options` object:

 - `size` (Array): The provided string is splitted and the value will be an array.
 - `box` (CliBox): The CliBox wrapper object.
 - `rText` (String): The rendered text using the Figlet lirary. This is added asynchronously.
- **Function** `callback`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`happy-birthday-gabriel`](https://github.com/IonicaBizau/happy-birthday-gabriel)—A NPM module for Gabriel's birthday

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
