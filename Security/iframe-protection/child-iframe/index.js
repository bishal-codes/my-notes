const express = require("express");

const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");

  // post messaging or content messaging recommended by browser for communication between iframe and the main window

  // if don't want cookie to be stolen
  res.cookie("sessionID", "12345", {
    httpOnly: true,
    secure: false, // CHANGE TO TRUE IN PRODUCTION
    sameSite: "strict",
  });

  next();
});

// serve static files
app.use(express.static("public"));

// define routes
app.get("/iframe-website1", (req, res) => {
  // send response data as json
  res.sendFile(__dirname + "/public/iframe-website1.html");
});

app.get("/iframe-website2", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website2.html");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
