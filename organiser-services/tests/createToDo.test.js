const createToDo = require("../handlers/createToDo");

describe("createToDo", () => {
  it("returns nothing", async () => {
    const callback = (err, resp) => {
      expect(resp).toEqual(null);
    };
    await createToDo.handler(null, null, callback);
  });
});
