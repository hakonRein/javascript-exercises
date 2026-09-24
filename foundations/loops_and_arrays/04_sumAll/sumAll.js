const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    }
    let sum = 0
    for (let i = (a < b ? a : b); i <= (b >= a ? b : a); i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
