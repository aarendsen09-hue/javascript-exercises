const fibonacci = function(num) {
    if (typeof num !== "number") {
        count = parseInt(num);
    } else {
        count = num;
    }

    if (count < 0) {
        return ("OOPS");
    } else if (count == 0) {
        return 0;
    }

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= count; i ++) {
        let temp = prev + current;
        prev = current;
        current = temp;
    }
    
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
