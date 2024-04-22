const express = require("express");

const app = express();

// serve static files
app.use(express.static("public"));

// define routes
app.get("/example1", (req, res) => {
  // send response data as json
  res.sendFile(__dirname + "/public/example1.html");
});

app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
