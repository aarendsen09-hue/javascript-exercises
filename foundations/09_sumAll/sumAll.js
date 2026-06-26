const sumAll = function(num1, num2) {
    let sum = 0;
    let lesser = 0;
    let greater = 0;
    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return "ERROR";
    }
    if (num1 >= 0 && num2 >= 0 && num1 % 1 == 0 && num2 % 1 == 0) {
        if (num1 < num2) {
            lesser = num1;
            greater = num2;
        } else {
            greater = num1;
            lesser = num2;
        }
    }  else {
        return "ERROR";
    }
    for (let i = lesser; i <= greater; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
