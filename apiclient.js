const axios = require("axios");

axios
  .get("http://localhost:8080", {
    params: {
      a: 1,
      b: 2,
      c: "hoge"
    }
  })
  .then(res => console.log(`res is ${JSON.stringify(res.data)}`))
  .catch(err => console.log(`${err.message}`));

axios
  .get("http://localhost:8080/hoge")
  .then(res => console.log(`res is ${JSON.stringify(res.data)}`))
  .catch(err => console.log(`${err.message}`));
