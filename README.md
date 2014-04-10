ASCII Text Animation
====================

Create beautiful ASCII text animations using NodeJS.

```js
var TextAnimation = require ("text-animation");

TextAnimation.start({
    animate: "down-up"
  , text: "Hello World!"
  , delay: 100
  , size: "40x30"
});
```

## Methods

### `start (options)`
 - `@options` is an object containing the following fields:
   - `animate`: the type of animation (only implemented `"down-up"`)
   - `text`: the text the should be animated
   - `delay`: the delay between frames
   - `size`: the size of the box (e.g. `"40x30")
   - `end`: function that will be fired after finishing animation

## Example

> ![](http://i.imgur.com/7MdhMvi.gif)

## Changelog
### `v0.1.3`
 - Install jasciimo via sudo

### `v0.1.2`
 - Install jasciimo via a shell script due to a NPM error

### `v0.1.1`
 - Use `jasciimo@0.6.0`

### `v0.1.0`
 - Initial release

## LICENSE
See license file
