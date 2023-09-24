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
app.get("/u", (req, res) => {
  res.json({
    message: "U Successfull!!!",
  });
});

app.get("/env", (req, res) => {
  res.json({
    message: `Env fetched: ${JSON.stringify(process.env)}`,
  });
});

app.get("/rahul", (req, res) => {
  res.json({
    message: `Rahul fetched: ${JSON.stringify(process.env)}`,
  });
});

app.get("/sunny", (req, res) => {
  res.json({
    message: `Rahul fetched: ${JSON.stringify(process.env)}`,
  });
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
  console.log(`[${new Date().toISOString()}] 404 Not Found - ${req.method} ${req.url}`);
});

app.listen(4000, () => {
  console.log("App running");
});
