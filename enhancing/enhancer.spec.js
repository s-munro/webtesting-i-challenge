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

describe("enhancer failure", () => {
  //   - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  // - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  it("exists", () => {
    expect(enhancer.fail).toBeTruthy();
  });
  it("decreses durability - 5 if enhancement < 15", () => {
    let returnedItem = enhancer.fail({
      name: "item",
      durability: 5,
      enhancement: 14,
    });
    expect(returnedItem.durability).toEqual(0);
  });
  it("decreases durability - 10 if enhancement >= 15", () => {
    let returnedItem = enhancer.fail({
      name: "item",
      durability: 11,
      enhancement: 15,
    });
    expect(returnedItem.durability).toEqual(1);
  });
  it("decreases enhancement - 1 if enhancement > 16", () => {
    let returnedItem = enhancer.fail({
      name: "sams item",
      durability: 15,
      enhancement: 17,
    });
    expect(returnedItem.enhancement).toEqual(16);
  });
});
