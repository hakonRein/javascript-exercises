const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let finalStr = ""
    for (let i = 0; i < num; i++) {
        finalStr += string
    }
    return finalStr
};

// Do not edit below this line
module.exports = repeatString;
