# clone.js

Hi everyone who sees this,

We needed a function that was very fast at copying large dom elements within a container. So I decided to create this really fast during worktime. 

The way this function works is with a container and a preset element we need to copy. The preset element will be copied and converted to a string with the function .outerHTML. After that the container will be emptied. Finally after emptying the container we set a value within our eventhandler and then we fill the container with the outerHTML of the child node within that container. 

This function is very really fast compared to using clone and detach and, has the lowest possible (at least that I could manage) performance impact. Works even very fast with huge childnodes.

# Features that need to be added

- Good readme
- Example file(s)

# Things to improve:

- Better commenting, made this in 20 minutes
- Better explanation in the comments about the functions


# Example usage
```html
<input type="number" name="input_number">

<div id="parentContainerId">
  <div class="child-node-class">
    <input type="text" name="firstname[]">
    <input type="text" name="lastname[]">
    <input type="text" name="age[]">
    <input type="text" name="email[]">
  </div>
</div>
```

# jQuery

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
  }).trigger('change'); // This is needed to trigger the value on load of the document
});
```
