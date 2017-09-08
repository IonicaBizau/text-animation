## Documentation

You can see below the API reference of this module.

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

