let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(obj) {
  // change code below this line
  if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;

  // if (
  //   ["Alan", "Jeff", "Sarah", "Ryan"].every((name) => obj.hasOwnProperty(name))
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // change code above this line
}

console.log(isEveryoneHere(users));
