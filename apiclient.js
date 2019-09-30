const axiosBase = require("axios");

const axios = axiosBase.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  responseType: "json"
});

axios
  .get("/")
  .then(res => console.log(`res is ${JSON.stringify(res.data)}`))
  .catch(err => console.log("ERR"));

axios
  .get("/hoge")
  .then(res => console.log(`res is ${JSON.stringify(res.data)}`))
  .catch(err => console.log("ERR"));
