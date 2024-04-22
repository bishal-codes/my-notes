const express = require("express");

const PORT = 5000;
const app = express();

// middlewares ensures anything reaches to the next line only goes through the middlewares function code written
app.use((req, res, next) => {
  // set the csp headers
  // load the content from the 'self' or own place or domain
  // and allow scripts to be loaded from our server only
  // if load the content from script level or trust the url as well
  // unsafe-inline let execute any inline script
  // use nonce to execute the valid inline external script
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;"
    //   "img-src https://media.licdn.com;"
    //   "script-src 'self'  'unsafe-inline' http://unsecure.com;"
  );

  next(); // next middleware is sth where once the code execution is complete then the flow is passed to the next execution
});

// exposing the public folder (all the static files can be accessed from here)
app.use(express.static("/public"));

// route
app.get("/", (req, res) => {
  //   console.log(req.url);

  // send back a response with some data in it
  // using the __dirname, get the current directory of the file or which is a special variable that points to the directory this file is running from

  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
