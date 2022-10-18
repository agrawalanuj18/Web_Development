// module.exports = "Hello World"; // The Way of export
// module.exports = exports;
module.exports.getDate = getDate;

function getDate() {
  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", option);
}

// This is a way to create multiple function in one module
module.exports.getDay = getDay;

function getDay() {
  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", option);
}
