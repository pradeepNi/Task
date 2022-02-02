const arr = require("./my.json");

// console.log(arr);
// console.log(arr[0].name);

var abc = {
  name: "shivam",
  age: 23,
};

// var ab = Object.keys(abc);
// console.log(ab);

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(4)(2)(6)(9)(8)());
