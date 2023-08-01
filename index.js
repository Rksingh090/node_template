const express = require("express");

const app = express();

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  const { method, url } = req;
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "API / is running",
  });
});

app.get("/test", (req, res) => {
  res.json({
    message: "Test Successfull!!!",
  });
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
  console.log(`[${new Date().toISOString()}] 404 Not Found - ${req.method} ${req.url}`);
});

app.listen(4000, () => {
  console.log("App running");
});
