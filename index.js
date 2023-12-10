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

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello Rishab!!!",
  });
});


app.get("/u", (req, res) => {
  res.json({
    message: "U Successfull!!!",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "Nice to meet u.",
  });
});

app.get("/env", (req, res) => {
  return res.json({
    envs: JSON.stringify(process.env)
  });
})

app.get("/get-env", (req, res) => {
  const {name} = req.query;
  if(process?.env[name])
  return res.json({
    envs: JSON.stringify(process?.env[name])
  });

  return res.json({
    err: "env not found"
  });
});



app.use((req, res, next) => {
  res.status(404).send('Not Found');
  console.log(`[${new Date().toISOString()}] 404 Not Found - ${req.method} ${req.url}`);
});

app.listen(4000, () => {
  console.log("App running");
});
