const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 24 },
  { name: "Jack", age: 30 },
  { name: "Jill", age: 35 },
];

// unit testing
function sortingByAge() {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;
