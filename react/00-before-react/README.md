### Things required before starting react:

- what is react? a library or framework? - can work independently inside the small portion of app. framework comes with all loads of things but react is bearbone minimal javascript library - just javascript code
- what is developer tool?
- installation of vscode
- what is emmet?
- first hello world program using html
- first hello world program using script - DOM manipulation

  - createElement()
  - innerHTML
  - getElementById()
  - appendChild()
  - how does browser understand all these things (superpowers) - browser has JS Engine in

- first hello program using react

  - CDN Links: what is cdn Links?
    - injected react cdn links or importing react into project using cdn links
    - what's inside react/reactDOM development and production cdn links - plain javascript code written by FB developers
    - at end of day, react is just javascript files
    - what is crossorigin in react - used to handle the CORS request
    - what happened when react is injected into project? - got superpowers of react such as functions, methods and more
    - why there are two cdn links for react? - react and reactDOM - react doesn't work only for browsers, but for mobile phones(react-native), react-3d and more places where react has been used, so there are different methods, functions used inside these various places.
    - what is react.development.js? - core file of react or core react algorithm written inside it.
    - what is react-dom.development.js? - library for dom operations or modification
    - using the superpowers from react and reactDOM, can build large-scale applications.
    - until here was the very fundamental concept before deep dive into react
  - first hello world program
    - imported react and react-dom cdn links inside body (at the end)
    - added a script tag
    - const heading = React.createElement() - to create element
      - three arguments - (type, props, ...children) - ("h1", {}, "Hello World!) - what is this object {} - place where you give attributes to your type or props
      - what is heading? or what do you get when you console.log(heading)? - object in console (a react element is normal javascript object)
    - const root = ReactDOM.createRoot(document.getElementById("root)) - creating root and rendering sth is job of reactDOM,
    - root.render(heading) - render function is to take this heading object and convert into h1 tag that browser understands and put that inside root element
    - everything is render inside root node

- creating nested elements using react

  - giving 2 elements as siblings, have to create an array of children inside createElement()

- code looks ugly so jsx comes into react to make developers life easy to create tags
- from the above, which is core basics of react and that is how react creates an html element

- order of files matters or should be in sequence - the script where code file where react is used should be after the core react script.
- Akshay Saini taught me to be always curious or sth to boggle there in your head

### Back-to-Top

## TOOLS

- `VS Code`
- `chrome browser and extensions`

## Build your first hello world program

- Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - use `CDN Links`
    - Create `an Element`
    - Create `nested React Elements`
    - Use `root.render`

## Problems - Questions

- What is `Emmet`?

`Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

https://blog.logrocket.com/type-html-faster-react-emmet-vs-code/

https://dev.to/raaynaldo/speed-up-code-your-html-using-emmet-in-vscode-nesting-operators-201o

- Difference between a `Library and Framework`?

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

- What is `CDN`? Why do we `use` it?

A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/

https://reactjs.org/docs/cdn-links.html

- Why is `React known as React`?

`React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.

https://www.geeksforgeeks.org/how-react-and-reactdom-works/

- What is `crossorigin in script tag`?

The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

https://www.dofactory.com/html/script/crossorigin

https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin

- What is difference between `React and ReactDOM`?

`React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

- What is difference between `react.development.js` and `react.production.js` files via CDN?

`Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

- What is `async and defer`?

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
