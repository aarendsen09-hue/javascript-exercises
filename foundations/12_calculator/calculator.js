const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, item) => {return total += item}, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => {return total *= item}, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let ans = 1;
	for (let i = 1; i <= num; i ++) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
