/**
 * The way you use this function is:
 *
 * Create a container element. Example:
 *
 * We create an ul container like <ul id="example"></ul>
 * In that container, create one element you need to copy with
 * a set value within an on change event
 * Something like this: <li><a href="#test">Name</a></li>
 *
 * Then after that you can run the rest of the functions to
 * create all the list items by the value you inputted in your
 * number or selectbox. Then you can call to cloneElements
 * within your event handler with the least possible
 * performance impact.
 *
 * When you use clone and detach jquery's equivalent to this
 * function, then it's really slow to create a large set of
 * complex elements. This javascript will fix that.
 *
 * Examples will follow later today: (19th of november 2019)
 *
 */

// Prototype element creation
String.prototype.toDOM=function(){
    var d=document
        ,i
        ,a=d.createElement("div")
        ,b=d.createDocumentFragment();
    a.innerHTML=this;
    while(i=a.firstChild)b.appendChild(i);
    return b;
};

/**
 * This function will create a string from an element
 * within a container that we want to clone to a list
 * of new elements.
 *
 * Example: you have a number box and want to clone some elements
 * according to the value of the number box .
 * This function makes sure the element you want to copy is
 * converted to a string and then removed from the container in which
 * we want to store multiple copies of the inner element.
 *
 * Call to this outside all event handlers for excellent performance
 *
 * @param {elementByID} parent  | Outer (parent) element ID
 * @param {querySelector} inner | The element that needs to be stringified and removed
 */
function prepareDOM(parent, inner) {
    // Get outer HTML of selected inner element
    var outerHTML = document.querySelector(inner).outerHTML;
    // When outerHTML is converted to string, empty the parent element
    document.getElementById(parent).innerHTML = "";
    // Then return the stringified DOM element
    return outerHTML;
}


/**
 * See above function for more informatiopn, it
 * contains a well explained description of what to
 * expect of this feature.
 *
 * This function is just to clean up your jquery eventhandlers
 * this is much faster than using jquery's clone and detach
 * No performance issues even when creating a large set of arrays
 *
 * @param {getElementById} parent   | The container node of which childs we want to copy
 * @param {DOMElement} node         | The HTML string of the element we want to cop
 * @param {integer} value           | The number of copies we want to make of the inner child
 */
function cloneElements(parent, node, value) {
    // Clear the parent container
    document.getElementById(parent).innerHTML = ""
    // Loop through total iterations set
    for(var i = 0; i < value; i++) {
        // Create elements from node.toDOM
        document.getElementById(parent).appendChild(node.toDOM());
    }
}
