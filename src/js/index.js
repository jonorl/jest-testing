function capitalise(str) {
  let arr = Array.from(str);
  arr[0] = arr[0].toString().toUpperCase();
  return arr.join("");
}

function reverseString(str) {
  let arr = Array.from(str);
  let tmp = [];
  for (let i = arr.length; i !== -1; i--) {
    tmp.push(arr[i]);
  }
  return tmp.join("");
}

const calculator = {
  add: function add(num1, num2) {
    return num1 + num2;
  },
  subtract: function subtract(num1, num2) {
    return num1 - num2;
  },
  divide: function divide(num1, num2) {
    return num1 / num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  },
};

module.exports = { capitalise, reverseString, calculator };

console.log(capitalise("jonathan"));
