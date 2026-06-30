const palindromes = function (str) {
    let simpler = str.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").replaceAll("'", "").replaceAll("!", "").toLowerCase();
    let half = simpler.length / 2;
    if (simpler.length % 2 != 0) {
        let secondHalf = simpler.substring(Math.floor(half)+1).split("").reverse().join("");
        if (simpler.substring(0, Math.floor(half)) === secondHalf) {
            return true;
        }
    } else {
        let secondHalf = simpler.substring(half).split("").reverse().join("");
        if (simpler.substring(0, half) === secondHalf) {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
