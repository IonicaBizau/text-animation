
# text-animation

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/text-animation.svg)](https://www.npmjs.com/package/text-animation) [![Downloads](https://img.shields.io/npm/dt/text-animation.svg)](https://www.npmjs.com/package/text-animation)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`happy-birthday-gabriel`](https://github.com/IonicaBizau/happy-birthday-gabriel)—A NPM module for Gabriel's birthday

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
