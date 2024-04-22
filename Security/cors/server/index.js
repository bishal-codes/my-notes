const express = require("express");
const app = express();
const cors = require("cors");

const allowedOrigins = ["http://127.0.0.1:5500"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

app.get("/test", (req, res) => {
  res.send([
    {
      id: "test",
      name: "Test User",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
