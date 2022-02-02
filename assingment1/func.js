const intialVal = [
  {
    key: "name",
    value: null,
    shouldShow: true,
    myFun: function (name, age) {
      this.value = name;
    },
  },
  {
    key: "age",
    value: null,
    shouldShow: true,
    myFun: function (name, age) {
      this.value = age;
    },
  },
  {
    key: "lastName",
    value: null,
    shouldShow: false,
    myFun: function (name, age) {
      this.shouldShow = name[0] === "R";
    },
  },
  {
    key: "middleName",
    value: null,
    shouldShow: false,
    myFun: function (name, age) {
      this.shouldShow = name[0] === "P";
    },
  },
  {
    key: "Father Name",
    shouldShow: false,
    value: null,
    dependency: {
      keyName: "age",
      condition: "lessThan",
      value: "18",
    },
  },
  {
    key: "Do You Drink",
    value: null,
    shouldShow: false,
    dependency: {
      keyName: "age",
      condition: "greaterThan",
      value: "18",
    },
  },
];

const fun = function (name, age, intialVal) {
  intialVal.filter((it) => {
    it.shouldShow || it.dependency.key;
  });
  intialVal.map((item) => {
    item.myFun(name, age);
  });
  var finalVal = intialVal.filter((item) => {
    return item.shouldShow && delete (item.shouldShow && item.myFun);
  });
  return finalVal;
};

console.table(fun("Rohit", 20, intialVal));

// name R -- midle
