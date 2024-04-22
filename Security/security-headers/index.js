const express = require("express");
const app = express();

// exposing public folder
app.use(express.static("public"));

// redirecting http to https
const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  next();
};

app.use(redirectToHttps);

// X-Powered-By is exposed on the browser, so we have to set it empty or remove this header
app.use((req, res, next) => {
  // its good to not share the referrer when redirecting from one directory to another
  res.setHeader("Referrer-Policy", "no-referrer");
  res.removeHeader("X-Powered-By");
  //   TO STOP BROWSER DOING SNIFFING, we need to SET header with Option nosniff
  res.setHeader("X-Content-Type-Options", "nosniff");
  // HSTS
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  next();
});

const PORT = process.env.PORT || 8000;

app.get("/stores", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Dominos",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
