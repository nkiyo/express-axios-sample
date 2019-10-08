const onGetRoot = require("./apiserver");

test("test onGetRoot", () => {
  expect(onGetRoot()).toBe({ msg: "Hello World" });
});
