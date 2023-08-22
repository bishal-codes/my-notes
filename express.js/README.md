Express 
- a popular Node.js web framework that makes building web applications easier. 

1. Handling HTTP Requests/Route Handling: 
- allows you to write handlers for different HTTP verbs (GET, POST, PUT, DELETE, etc.) at different URL paths. This enables you to define routes and specify how your application should respond to different types of requests.

2. View Rendering: 
- integrates with "view" rendering engines, such as EJS or Handlebars, allowing you to generate dynamic HTML responses by inserting data into templates. This makes it easy to create dynamic web pages with reusable components.

3. Application Settings: 
- allows you to set up common web application settings, like the port to use for connections or the location of templates used for rendering responses. This makes configuration straightforward and organized.

4. Middleware: 
- One of the most powerful features of Express is its middleware system. Middleware functions can be added at any point within the request handling pipeline, allowing you to process incoming requests before they reach your route handlers. This enables you to add authentication, logging, error handling, and other functionalities in a modular and reusable way.

 - install express
 `npm i --save express`

 - import express - create and configure web server
```js
const express = require('express'); //importing express module from node_modules folder
// es6
import express from 'express';
```

 - create an instance of express
 ```js
 const app = express();
 // or using ES6 syntax
 let app = new Express;
 console.log(app);
 ```

 - use the app object to configure middleware
 and routes for your application
 ```js
 /*
 * This is how you define a route in Express or defining a middleware function in an Express application
 ,
 it takes two arguments, first argument is the path where we want our route to be available on
 second one is callback function which will handle request when user hits this route
 */
app.use("/", (req, res) => {
    // 
})
```
In Express, middleware functions are functions that have access to the request (req) and response (res) objects and can modify these objects or perform additional operations during the request-response cycle.

- `app.use("/")`: This line specifies that the middleware function will be executed for all incoming requests with any HTTP method (GET, POST, etc.) and any URL path.

- `(req, res) => {...}`: This is the middleware function itself, defined as an arrow function with two parameters (req and res).

- `res.json()` method automatically sets the appropriate `Content-Type` header to `application/json` 
if not already set by the client browser. It also converts JavaScript objects into JSON strings before sending them
and sends JSON data as response body
. It can also take plain JavaScript objects instead of strings.

`res.json()` method is used to send a `JSON response` to the client (usually a web browser or API consumer). It is a built-in method provided by Express that simplifies the process of `sending JSON data as the HTTP response`.

When you call `res.json(data)`, Express automatically sets the `appropriate Content-Type header` to `"application/json"` and `converts the provided data parameter into a JSON string`. It then sends the JSON data as the response body.

```js
const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  const data = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
  };

  // Sending a JSON response with res.json()
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// When a client makes a GET request to "/api/data", the server responds with the JSON data:

{
  "name": "John Doe",
  "age": 30,
  "occupation": "Engineer"
}
```

- an error-handling middleware in an Express application. Error-handling middleware is used to handle any errors that occur during the request-response cycle. It is defined with four parameters: (error, req, res, next).
    - `app.use((error, req, res, next) => {...})`: This line sets up an error-handling middleware function that takes four parameters - error, req (request), res (response), and next (a function to pass control to the next middleware). It's important to note that Express recognizes this function as an error handler because it has four parameters.
    - `const status = error.status || 500;`: This line determines the HTTP status code to be sent in the response. If the error object has a status property, it will be used. Otherwise, a default status of 500 (Internal Server Error) is used.
    - `res.status(status).json({...})`: This line sets the HTTP status code of the response to the determined status and sends a JSON response with an error message. 

-  starting the Express server and listening for incoming requests on a specified port.
```js
app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${PORT}`);
});
```
- `app.listen(PORT, ...)`: This method starts the Express server and makes it listen for incoming HTTP requests on the specified PORT. The PORT variable should contain the port number on which you want the server to run (e.g., 3000).

- `(error) => { ... }`: This is a callback function that will be executed once the server is up and running. It takes an error parameter, which can be used to check if any error occurred during the server startup.

### request object - properties and methods
route handling involves processing incoming HTTP requests and extracting data from the request object (req) to perform specific actions based on the requested URL and HTTP method. 

1. `req.params`: To access the route parameters specified in the URL. For example, if you have a route like "/users/:id", req.params.id will give you the value of the "id" parameter from the URL.

2. `req.query`: to access the query parameters present in the URL. For example, if the URL is "/users?name=John&age=30", req.query will be an object with the properties "name" and "age".

```js
const express = require("express");
const app = express();

// Middleware to parse JSON and urlencoded data in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handler for GET request to /users/:id
app.get("/users/:id", (req, res) => {
  // Accessing route parameters using req.params
  const userId = req.params.id;

  // Accessing query parameters using req.query
  const name = req.query.name;
  const age = req.query.age;

  res.send(`User ID: ${userId}, Name: ${name}, Age: ${age}`);
});

// Route handler for POST request to /login
app.post("/login", (req, res) => {
  // Accessing data from the request body using req.body
  const username = req.body.username;
  const password = req.body.password;

  // Accessing request headers using req.headers
  const userAgent = req.headers["user-agent"];

  // Accessing cookies using req.cookies
  const cookies = req.cookies;

  // Accessing the HTTP method using req.method
  const method = req.method;

  // Accessing the URL of the request using req.url
  const url = req.url;

  // Accessing the path portion of the request URL using req.path
  const path = req.path;

  // Accessing the hostname from the request using req.hostname
  const hostname = req.hostname;

  // Accessing the IP address of the client making the request using req.ip
  const ip = req.ip;

  res.send(
    `Username: ${username}, Password: ${password}, User Agent: ${userAgent}, Cookies: ${JSON.stringify(
      cookies
    )}, Method: ${method}, URL: ${url}, Path: ${path}, Hostname: ${hostname}, IP: ${ip}`
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```

3. `req.body`: If you're using middleware like express.json() or express.urlencoded(), this property provides access to the data sent in the request body for POST and PUT requests.

4. `req.headers`: This property gives you access to the request headers sent by the client, allowing you to retrieve information like user agents, content types, and more.

5. `req.cookies`: If you're using the cookie-parser middleware, this property provides access to the cookies sent by the client in the request.

6. `req.method`: This property gives you the HTTP method used in the request (e.g., GET, POST, PUT, DELETE).

7. `req.url`: This property gives you the URL of the request.

8. `req.path`: This property gives you the path portion of the request URL.

9. `req.hostname`: This property gives you the hostname from the request.

10. `req.ip`: This property gives you the IP address of the client making the request.