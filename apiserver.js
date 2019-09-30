const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(`get /`);
  res.send("Hello World!");
});

app.get("/hoge", (req, res) => {
  console.log(`get /hoge`);
  res.send("HOGE");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
