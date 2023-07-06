import React from "react";
import ReactDOM from "react-dom/client";

// nested element
// parent element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ])
);

// creating element using react
const element = React.createElement("h1", null, "Hello World");

// create an root element using react
// const rootElement = document.getElementById("root");

// tell the react dom the root element is root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the element to the root
root.render(parent);
