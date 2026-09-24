const fibonacci = function(number) {
    if (number < 0 || !Number.isFinite(number))
        return "OOPS";
    if (number < 2)
        return number;

    return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
