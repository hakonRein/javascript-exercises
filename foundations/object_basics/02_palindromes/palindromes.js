const palindromes = function (text) {
    let filteredText = [...text.toLowerCase()].filter(letter => {
        if ("abcdefghijklmnopqrstuvwxyzæøå0123456789".includes(letter)) {
            return true;
        }
    })

    for (let i = 0; i < filteredText.length / 2; i++) {
        if (filteredText[i] != filteredText[filteredText.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
