const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(`get /`);
  res.json({
    msg: "Hello World!"
  });
});

app.get("/hoge", (req, res) => {
  console.log(`get /hoge`);
  res.json({
    msg: "HOGEGEE"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
