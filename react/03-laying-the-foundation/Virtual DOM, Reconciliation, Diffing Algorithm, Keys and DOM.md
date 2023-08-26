Virtual DOM, Reconciliation, Diffing Algorithm, Keys and DOM

✔ DOM (Document Object Model)
◼   It is the representation of HTML elements/nodes in tree format in the browser.

✔  Virtual DOM
◼   It is the representation of actual DOM in memory.
◼   It is nothing but a Javascript object.  
◼   It acts as middle layer between react components and actual DOM.
     ◽   React component  ➖ Virtual DOM ➖ Actual DOM 
◼   Virtual DOM is a old concept but React uses it effectively to make reconciliation process more powerful.

✔  Reconciliation ↔ Diffing Algorithm ↔ React Fiber
◼   These are the core of React 🚀
◼   Reconciliation is a process which uses "diffing algorithm" to compare two virtual DOMs (initial and updated) to find the difference between the HTML elements/nodes and updates the actual DOM using "only the updated nodes".
◼   Behind the scene it actually compares two Javascript objects {👴} - {🧑}
◼   React Fiber : It is the new reconciliation algorithm in React, it was released in React 16.

✔ Key property 
◼   Always provide a "unique value" to key whenever looping on any "list items". We usually use "map" method to loop over list items.
◼   Providing keys to list items will make reconciliation process more efficient to render the HTML elements/nodes on to DOM. 
◼   Reconciliation process will come to know easily what was there (old virtual dom)  and what has changed (new virtual dom) between the two renders and update the DOM elements quickly. 
◼   Try to get the unique values from the back-end data and avoid giving array index as key (suggested by React team). 
◼   Index will create issues if the sort operation performed on data (Index will be altered) and data will not displayed on the UI as expected.
◼   Keep this (index) as last option if there are no unique values available.

◼   Array Index < Unique ID (best practice) 👈