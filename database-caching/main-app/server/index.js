const express = require("express");
const path = require("path");
const port = 8010;
const app = express();

// setting http cache headers
app.use((req, res, next) => {
  //   res.set("Cache-Control", "public, max-age=300");
  //   res.setHeader("Cache-Control", "public, max-age=300");
  // expires header
  res.setHeader("Expires", new Date(Date.now() + 300000).toUTCString());
  next();
});

app.use(
  express.static(path.join(__dirname, "public"), {
    etag: true,
    cacheControl: false,
    lastModified: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
