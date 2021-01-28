const enhancer = require("./enhancer.js");
// test away!

const item = {
  name: "name",
  durability: 0,
  enhancement: 0,
};

const itemMaxEnhancement = {
  name: "name",
  durability: 0,
  enhancement: 20,
};

describe("enhancer repair", () => {
  it("exists", () => {
    expect(enhancer.repair).toBeTruthy();
  });
  it("returns the item with durability 100", () => {
    const returnedItem = enhancer.repair(item);
    expect(returnedItem.durability).toEqual(100);
  });
});

describe("enhancer success", () => {
  it("exists", () => {
    expect(enhancer.success).toBeTruthy();
  });
  it("adds 1 if less than 20", () => {
    const returnedItem = enhancer.success(item);
    expect(returnedItem.enhancement).toEqual(item.enhancement + 1);
  });
  it("does not increase enhancement if enhancement 20", () => {
    const returnedItem = enhancer.success(itemMaxEnhancement);
    expect(returnedItem.enhancement).toEqual(itemMaxEnhancement.enhancement);
  });
});
