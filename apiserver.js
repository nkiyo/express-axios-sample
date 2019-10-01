const express = require("express");
const moment = require("moment");

const app = express();
const port = 8080;

console.log(`${moment().format()}`);

function onGetRoot() {
  const res = {
    msg: "Hello World",
    time: moment().format()
  };
  return res;
}

app.get("/", (req, res) => {
  console.log(`get /`);
  res.json(onGetRoot());
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
