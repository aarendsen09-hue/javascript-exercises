const convertToCelsius = function(tempF) {
  let c = (tempF-32) * (5/9);
  let result = Number(c.toFixed(1));
  return result;
};

const convertToFahrenheit = function(tempC) {
  let f = (tempC* (9/5) + 32);
  let result = Number(f.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
