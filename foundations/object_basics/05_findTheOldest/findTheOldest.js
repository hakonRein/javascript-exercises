const findTheOldest = function(peopleArray) {
    return peopleArray.sort( (pers1, pers2) => {
        const pers1Age = pers1.yearOfDeath - pers1.yearOfBirth;
        const pers2Age = pers2.yearOfDeath - pers2.yearOfBirth;
        return pers2Age - pers1Age;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
