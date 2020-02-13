# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

$(selector), but the selector should be a unique identifier such as a class or id. If you were to do something like p it would select all p tags in the document. document.querySelector() is what you would use in vanilla JS.

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

It returns a jquery object, which is an array like structure that contains all of the DOM elements vs just one DOM element object.

3. How can you select multiple elements with jQuery?

You can select multiple elements by separating each element with a comma, and wrapping them in quotes. For example, $('h1, h2, p')

4. How can you select multiple elements with different IDs and classes in one selector expression?

You can select multiple elemenets with different classes or IDs by separating each one with a comma as well, and also wrapping them in quotes. You will need to add a . or # like in css. For example, $('.green, .red')

5. What are the different ways of chaining selectors?

Like above, you can chain the selectors by separating them by commas.

6. How do you select elements based on different attributes?

$("[attribute = name]")

7. How do you select a checkbox based on its state?

.prop() will check the state/property of the checkbox. For example, you would use if ($(element).prop("checked")) to select a checkbox that is checked.


## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. Select all the labels and give them a class of "green"
2. Select all of the `phone` inputs and give them a class of "yellow"
3. Select the label for the email input and give it a class of "blue"
4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
5. Give all labels inside of a p tag a class of "purple"
6. Give the Clear button a class of red
7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
