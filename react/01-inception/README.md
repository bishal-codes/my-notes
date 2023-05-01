# Inception

- the concept of rendering one component inside another component, which is then rendered inside another component, and so on, creating a nested hierarchy of components.
- powerful technique that allows developers to create complex user interfaces by breaking them down into smaller, more manageable components that can be combined in various ways to create a rich and dynamic application.

1. Is React a Library or Framework?

- React is a JavaScript library created by Facebook
- React is a User Interface (UI) library
- React is a tool for building UI components

2. What is a UI Component?

- A UI component is a small, reusable piece of code that renders a part of a user interface
- A UI component is a function or a class that accepts inputs (called props) and returns a React element describing what should appear on the screen

## REACT Element

- A React element is a plain object describing a component instance or DOM node and its desired properties

## React.createElement(tags, [props], [children])

- creates or returns an object

`Tags` :- a html tag like h1, div etc,
`Props` :- like class, id of that tag (can be an object or null, where null is same as an empty obj) or attributes
`Children` :- the content of the tag, like what we use in .appendChild()
It is a top-level API of ReactJS which is used to create an element like the `document.createElement()` in DOM.

Now, in React, we have to create a root such that we can tell the JS Engine that we want to run our
React application in that place. To do this, ReactDOM contains APIs to render React components
on the client(on the browser).

## ReactDOM.createRoot

This API is a Client-side API that lets you create a root to display React components inside a browser DOM mode. It returns an
object with 2 functions/methods :- `render` and `unmount`

## root.render(reactNode/reactElement/object)

- takes in object > create tags that browser understand inside root element in DOM

- helps to display a piece of JSX(“React node”) or a React Element(created by `react.createElement()` ) into the React root’s
  browser DOM node.
  It returns undefined.

_NOTE:_ We can inject React into any existing projects too, without affecting the other areas. Like if we already have 2 div-s above
and below the root div, the React will only affect the root div and the others will be displayed as usual.

### Important points :-

• If we write the React script before the 2 links, then we will get an error in the console “React not defined” and the
react elements will not be rendered properly
• Developers write :-

```html
<div id="”root”">Not Rendered Yet</div>
```

Because, if something happens due to which react is not rendered properly in the root element, that will be
easily detected.
• The heading1,2 and 3 in example-4, are all react elements and we know that they are nothing but objects and render
function is used to overwrite the contents of root HTML element with those elements.

## Building React App from scratch

1. Create a new folder

`react-app`

2. Create a new file

`index.html`

3. Add the following code to the file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

4. Add react and react-dom development script in index.html

   ```html
   <script
     src="https://unpkg.com/react/umd/react.development.js"
     crossorigin
   ></script>
   <script
     src="https://unpkg.com/react-dom/umd/react-dom.development.js"
     crossorigin
   ></script>
   ```

Now we have the super power of react in our app.

5. Create a new file

`index.js`

6. Add the following code to the file

```html
<script src="index.js"></script>
```

7. Add the following code to the file

```js
// creating element using react
const element = React.createElement("h1", null, "Hello World");

// create an root element using react
const rootElement = document.getElementById("root");

// tell the react dom the root element is root
const root = ReactDOM.createRoot(rootElement);

// render the element to the root
root.render(element);
```

## References

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8
