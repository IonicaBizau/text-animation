Text Animation
==============
Create beautiful ASCII text animations using NodeJS.

# Installation

```sh
$ npm install text-animation
```

# Example
```js
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
```

The result will be:

![](http://i.imgur.com/EFXCRRR.gif)

# Documentation
## `TextAnimation(options, callback)`
Creates the animation with provided text.

### Params
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

# How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# Changelog
## `1.0.0`
 - Removed `jasciimo` as dependency. Fixes #1.
 - Refactored the code.
 - Added `cli-box` as dependency. Fixed #2.
 - Added `top-bottom` animation. Thanks @radubogdan.
 - Updated the API. See the new documentation and examples.

## `v0.1.3`
 - Install `jasciimo` via sudo

## `v0.1.2`
 - Install `jasciimo` via a shell script due to a NPM error

## `v0.1.1`
 - Use `jasciimo@0.6.0`

## `v0.1.0`
 - Initial release

# License
See the [LICENSE](./LICENSE) file.
