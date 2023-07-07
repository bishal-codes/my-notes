import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    abc: "xyz",
  },
  "Hello World from React"
); // returns object (react element)

/**
 * nesting element in react
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 *     <div id="child2">
 *          <h1>I am child</h1>
 *          <h2>I am child</h2>
 *      </div>
 * </div>
 *
 *
 */

// creating element using react
// const element = React.createElement("h1", null, "Hello World");

// create an root element using react
// const rootElement = document.getElementById("root");

// tell the react dom the root element is root
// const root = ReactDOM.createRoot(document.getElementById("root"));

// render the element to the root
// root.render(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am child 1"),
    React.createElement("h2", {}, "I am child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child 3"),
    React.createElement("h2", {}, "I am child 4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
