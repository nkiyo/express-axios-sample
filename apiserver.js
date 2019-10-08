const express = require("express");
const moment = require("moment");

const app = express();
const port = 8080;

console.log(`${moment().format()}`);

function onGetRoot(a, b) {
  const res = {
    msg: "Hello World",
    sum: a + b
    // time: moment().format()
  };
  return res;
}

app.get("/", (req, res) => {
  console.log(`get /`);
  res.json(onGetRoot(Number(req.query.a), Number(req.query.b)));
  console.log(`a=${req.query.a}, b=${req.query.b}, c=${req.query.c}`);
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

module.exports = onGetRoot;
