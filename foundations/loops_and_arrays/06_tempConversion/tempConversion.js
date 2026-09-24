const convertToCelsius = function(tempFahr) {
  return Number(((tempFahr - 32) * 5 / 9).toFixed(1))
};

const convertToFahrenheit = function(tempCels) {
  return Number((tempCels * 9 / 5 + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
