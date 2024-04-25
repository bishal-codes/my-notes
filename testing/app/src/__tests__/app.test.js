// unit testing
const sortingByAge = require("../app");

test("Testing if the first user is Jane after sorting", () => {
  const sortedData = sortingByAge();

  expect(sortedData[0].name).toBe("Jane");
});

test("Testing if the sorted data  has a length of 4", () => {
  const sortedData = sortingByAge();

  expect(sortedData).toHaveLength(4);
});

test("Testing if the sorted data is not null or undefined", () => {
  const sortedData = sortingByAge();

  expect(sortedData).not.toBeNull();
  //   expect(sortedData).not.toBeUndefined();
  expect(sortedData).not.toBe(undefined);
});
