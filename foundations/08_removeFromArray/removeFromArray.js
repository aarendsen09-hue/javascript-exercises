const removeFromArray = function() {
    const argsArray = Array.from(arguments);
    let array = argsArray.splice(0, 1).flat();
    for (let i = 0; i < argsArray.length; i++) {
        while (array.indexOf(argsArray[i]) > -1) {
        let index = array.indexOf(argsArray[i]);
        array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
