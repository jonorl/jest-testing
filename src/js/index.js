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

function caesarCipher(str, key) {
  let tmp = Array.from(str)
  let tmp2 = []
  tmp.forEach(char => {
    let tmp3;
    // console.log(char.charCodeAt())
    if (/^[a-z]+$/.test(char)){
      tmp3 = (char.charCodeAt() + key)
      tmp3 = ((tmp3 - 97) % 26) + 97 ;
    }
    else if(/^[A-Z]+$/.test(char)){
      // console.log(char.charCodeAt())
      tmp3 = (char.charCodeAt() + key)
      tmp3 = ((tmp3 - 65) % 26) + 65 ;
    }
    else tmp3 = char.charCodeAt();
    tmp2.push(String.fromCharCode(tmp3))
  }); 
  return tmp2.join('')
}

module.exports = { capitalise, reverseString, calculator, caesarCipher };

caesarCipher("XYZ", 3)