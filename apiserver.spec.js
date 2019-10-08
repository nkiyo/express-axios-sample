const onGetRoot = require("./apiserver");

test("test onGetRoot", () => {
  expect(onGetRoot(1, 2)).toEqual({ msg: "Hello World", sum: 3 });
});
