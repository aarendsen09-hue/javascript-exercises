const findTheOldest = function(arr) {
    for (person of arr) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = 2026;
        }
    }
    const sorted = arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
