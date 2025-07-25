# Copy functionality for different parts of a webpage

Might sound weird, but keep reading.

## Ever wanted to copy just that one?

The idea is simple and straight forward. You have a webpage and you have different sections on that webpage such as ´´´<section>´´´ or ´´´<div class="section">content here</div>´´´ and you want to allow the visitor 
to copy the content of that section by the click of a button.

## You want to accomplish this with minimal JS code

Forget about jQuery and stuff, just create some basic JS code and you're done.

When the visitor clicks the button, this will happen:

1. It finds the closest section to the button.

2. It gets the headings, paragraphs, lists, and links (with their addresses) and details (open and close).

4. Copies the content to the clipboard.
  
5. Displays a message for 2 seconds to visually confirm that the copy is done.

**If copying fails, it logs an error in the browser console (added for developers, remove in production).**

ENJOY!
