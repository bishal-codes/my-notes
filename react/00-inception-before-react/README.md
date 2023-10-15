# Things required before starting react: Inception

## [Build First Hello Program](##build-your-first-hello-world-program)
## [React Element](##reactcreateelementtags-props-children)
## [React.createRoot](##reactdomcreateroot)

## TOOLS

- `VS Code`
- `chrome browser and extensions`

1. what is react? Difference between a `Library and Framework`?

- library can `work independently inside the small portion of app`.
- framework comes with all loads of things but react is bear-bone minimal javascript library - just javascript code
- react is giving some helper methods that developers are using for faster development
  - React is a JavaScript library created by Facebook
  - React is a User Interface (UI) library
  - React is a tool for building UI components

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

2. what is developer tool?
3. What is `Emmet`?

`Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

https://blog.logrocket.com/type-html-faster-react-emmet-vs-code/

https://dev.to/raaynaldo/speed-up-code-your-html-using-emmet-in-vscode-nesting-operators-201o

- installation of vscode
- first hello world program using html
- first hello world program using script - DOM manipulation
- first hello program using react

  - createElement()
  - innerHTML
  - getElementById()
  - appendChild()

4. how does browser understand all these things (superpowers) - browser has JS Engine in

5. CDN Links: What is `CDN`? Why do we `use` it?
   - injected react cdn links or importing react into project using cdn links

A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/

https://reactjs.org/docs/cdn-links.html

6. what's inside react/reactDOM development and production cdn links - plain javascript code written by FB developers

   - at end of day, react is just javascript files

7. What is `crossorigin in script tag`?

The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

- used to handle the CORS request

### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials"></script>
```

https://www.dofactory.com/html/script/crossorigin

https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin

8. what happened when react is injected into project? - got superpowers of react such as functions, methods and more

9. What is difference between `React and ReactDOM`?

`React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

10. why there are two cdn links for react? - react and reactDOM

- react doesn't work only for browsers, but for mobile phones(react-native), react-3d and more places where react has been used, so there are different methods, functions used inside these various places.

11. what is react.development.js?

- core file of react or core react algorithm written inside it.

12. what is react-dom.development.js?

- library for dom operations or modification
- using the superpowers from react and reactDOM, can build large-scale applications.

13. What is difference between `react.development.js` and `react.production.js` files via CDN?

`Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

14. What is a UI Component?

- A UI component is a small, reusable piece of code that renders a part of a user interface
- A UI component is a function or a class that accepts inputs (called props) and returns a React element describing what should appear on the screen

15. Why is `React known as React`?

`React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.

https://www.geeksforgeeks.org/how-react-and-reactdom-works/

16. What is `async and defer`?

`Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

### _Syntax_

```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### _Syntax_

```sh
<script src="demo_defer.js" defer></script>
```

## Resources

- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

`until here was the very fundamental concept before deep dive into react`

### Back-to-Top

## Build your first hello world program

- Using `just HTML`
- Using `JS to manipulate the DOM`
- Using `React`
  - use `CDN Links`
    - Create `an Element`
    - Create `nested React Elements`
    - Use `root.render`

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

    <!-- imported react and react-dom cdn links inside body (at the end)
    - added a script tag -->

    <script
      src="https://unpkg.com/react/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script>
      // nested element
      // parent element

      // React.createElement() - to create element
      // three arguments - (type, props, ...children) - ("h1", {}, "Hello World!)
      // what is this object {} - place where you give attributes/properties to your type or props

      // <div id="parent">
      //   <div id="child1">
      //     <h1>I am an h1 tag</h1>
      //     <h2>I am an h2 tag</h2>
      //   </div>
      //   <div id="child2">
      //     <h1>I am an h1 tag</h1>
      //     <h2>I am an h2 tag</h2>
      //   </div>
      // </div>

      const parent = React.createElement(
        "div",
        { id: "parent" },
        // creating nested elements using react
        // if to create siblings or more children, create an array
        [
          React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "i am an h1 tag"),
            React.createElement("h2", {}, "i am an h2 tag"),
          ]),
          React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "i am an h1 tag"),
            React.createElement("h2", {}, "i am an h2 tag"),
          ]),
        ]
      );

      // code looks ugly so jsx comes into react to make developers life easy to create tags

      // creating element using react
      // what is element?
      // what do you get when you console.log(element)? --> an object
      // (a react element is normal javascript object)
      const element = React.createElement("h1", null, "Hello World");

      // create an root element using react
      const rootElement = document.getElementById("root");

      // tell the react dom the root element is root
      // ReactDOM.createRoot(document.getElementById("root))
      // creating root and rendering sth is job of reactDOM,
      const root = ReactDOM.createRoot(rootElement);

      // render the element to the root
      // root.render(parent) - render function is to take this parent object and convert into h1 tag that browser understands and put that inside root element
      // - everything is render inside root node
      root.render(parent);
    </script>
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

8. order of files matters or should be in sequence - the script where code file where react is used should be after the core react script.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root">
      <!-- this h1 will be replaced by the root render method of react -->
      <h1>Not rendered</h1>
    </div>

    <script
      src="https://unpkg.com/react/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="./index.js"></script>
  </body>
</html>
```

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

`from the above, which is core basics of react and that is how react creates an html element`

`be always curious or sth to boggle there in your head`

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

## References

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8
