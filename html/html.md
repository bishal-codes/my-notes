# HTML and Browsers

▶︎ HTML is a language that helps browsers to declaratively provide the info, what is about to be represented on the webpage. So the correct answer and thinking paradigm should be - we can see only pixels on the screen.

▶︎ HTML helps in providing info to the HTML parser to parse and represent something and that HTML parser only builds the DOM(Document Object Model).

▶︎ HTML after being parsed - is shown in two steps 
1. Layout engine calculates the exact pixels of a particular element on the screen so that it could be seen.
2. Render Engine - It shows the particular pixels on the screen, in the form of images that are pinged through the Graphic Card every 16 milliseconds(60 times a second).

▶︎ Document Object Model(DOM) is just the mirror of whatever is shown on the screen. It is the data structure in C++, which we can interact with JavaScript using DOM API. Pixels can change on viewport height, and width changes, but Data remains the same until it is changed by us using JavaScript.

▶︎ HTML is just the declarative language, parsed only one time, when we hit any URL, and whatever we see on the screen is an entirely different thing, not owned by us, but we can only interact with it with the help of WEB APIS via JavaScript.
