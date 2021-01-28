module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return { ...item };
  }
}

function fail(item) {
  // const item = { ...item }
  const newItem = { ...item };
  if (item.enhancement < 15) {
    newItem.durability = item.durability - 5;
  }
  if (item.enhancement >= 15) {
    newItem.durability = item.durability - 10;
  }
  if (item.enhancement > 16) {
    newItem.enhancement = item.enhancement - 1;
  }
  //   - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  // - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  return { ...newItem };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
