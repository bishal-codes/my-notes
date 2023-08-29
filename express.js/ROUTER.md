`routers` 
- define the routes and associated logic for handling different HTTP requests. 
- help in organizing and modularizing the application by separating the route handling from the main application logic.:

1. `Define the Router`: Create an instance of the Express Router using `express.Router()`. 

2. `Route Handling`: Define the routes for various HTTP methods `(GET, POST, PUT, DELETE, etc.)` and URL paths. For example, you might have routes like /users, /products, /login, etc.

```js
import express from "express";

// Create a Router
const router = express.Router();

// Route & Request Handling
router.get("/", (req, res) => {
  // Handle GET request at root path
});

router.post("/create", (req, res) => {
  // Handle POST request at "/create" path
});

// Middleware
router.get("/protected", authMiddleware, (req, res) => {
  // Only executed if authenticated
});

// Error handling

// module.exports = router;
export default router;
```

3. `Request Handling`: For each route, define the logic or callback function that should be executed when a request to that route is received. This function typically takes the request (req) and response (res) objects as parameters.

4. `Middleware`: Optionally, you can use middleware functions within the router to perform tasks such as authentication, data validation, logging, etc. Middleware functions can be applied to specific routes or to the entire router.

5. `Error Handling`: Implement error-handling middleware within the router to handle errors that occur during route handling. This helps in centralizing error handling and providing consistent error responses.

6. `Export the Router`: Once all the routes and middleware are defined, export the router so that it can be used in the main application file.


## Middlewares

- Middlewares are functions that are executed in the middle of the request and response cycle.
- Middlewares are used to modify the request and response objects.
- Middlewares are used to execute some code before the request is processed by the route handler.
- Middlewares are used to execute some code after the request is processed by the route handler.
- Middlewares are used to execute some code if the request is not processed by the route handler.

1. app.use();

- app.use() is used to register a middleware function that will be executed for every request to a specific route and HTTP method.

2. express.json();

- express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

## router.get("/:id")

- we can use `router.get("/:id")` to get the id from the url and/or `expecting something from db` and use it in the query to fetch the data from the database.
- after semicolon is variable and whatever you send data will be available in variable
- we receive this data in express through `req.params`.

## router.get("/:id?")

- we can use `router.get("/:id?")` to get the id from the url or `expecting something from db` and use it in the query to fetch the data from the database.
- after semicolon is variable and whatever you send data will be available in variable
- we receive this data in express through `req.params`.
- we can use `?` to make the id optional.

### req.body

- req.body is a property on the request object that contains the body of the request.

### Difference between PUT and PATCH method

PUT method is used to update the whole resource. PATCH method is used to update the partial resource.
If you have a lot of data stored in your db, and if you are updating partial or few part of the data then we use patch method. If updating entire information based on given id, we use put method.

### POST method

POST method is used to create a new resource.

### GET method

GET method is used to get the resource.

### DELETE method

DELETE method is used to delete the resource.

### throw new Error

throw new Error is used to throw an error. It is used to stop the execution of the code.

```js
throw new Error("Error message");
```

### try catch

try catch is used to catch the error. It is used to handle the error.

```js
try {
  // code
} catch (error) {
  // error handling
}
```

