'use strict'

// debugger;

const countProps = function(obj) {
  const arrObj = Object.keys(obj)
  return arrObj.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3