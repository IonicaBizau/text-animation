<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# text-animation

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/text-animation.svg)](https://www.npmjs.com/package/text-animation) [![Downloads](https://img.shields.io/npm/dt/text-animation.svg)](https://www.npmjs.com/package/text-animation) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Create beautiful ASCII text animations using NodeJS.

















## :cloud: Installation

```sh
# Using npm
npm install --save text-animation

# Using yarn
yarn add text-animation
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












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







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
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
























## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
