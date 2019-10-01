const axios = require("axios");

axios
  .get("http://localhost:8080")
  .then(res => console.log(`res is ${JSON.stringify(res.data)}`))
  .catch(err => console.log("ERR"));

axios
  .get("http://localhost:8080/hoge")
  .then(res => console.log(`res is ${JSON.stringify(res.data)}`))
  .catch(err => console.log("ERR"));
