# clone.js

Hi everyone who sees this,

I created this really fast during work, because we needed a function that was very fast at copying large dom elements within a container. 
Mainly input fields, but it was very slow using jquery for this. 

We needed something that was reasonably on the fly without any lag, so with some digging using my minor javascript skills I created this. 

The way this function works is with a container and a preset element we need to copy. The preset element will be copied and converted to a string with the function .outerHTML. After that the container will be emptied. Finally after emptying the container we set a value within our eventhandler and then we fill the container with the outerHTML of the child node within that container. 

This function is very really fast compared to using clone and detach and, has the lowest possible (at least that I could manage) performance impact. Works even very fast with huge childnodes.

# Features that need to be added

- Good readme
- Example file

# Things to improve:

- Better commenting, made this in 20 minutes
- Better explanation in the comments about the functions


# Example jQuery usage -> (HTML demo will follow)
```javascript
$(document).ready(function(){
  // Create string from DOM element and remove it
  var elementString = prepareDOM('parentContainerId', '.child-node-class');
  // Input number on mousewheel
  $('input[name="input_number"]').mousewheel(function() {
      // Trigger change
      $(this).trigger('change');
  });
  // Input number on key up
  $('input[name="input_number"]').on('keyup', function() {
      // Trigger change
      $(this).trigger('change');
  });
  // On input number value change
  $('input[name="input_number"]').on('change', function () {
      // Clone elements
      cloneElements('parentContainerId', elementString, this.value);
  });
});
```
