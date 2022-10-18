// module.exports = "Hello World"; // The Way of export

module.exports = getDate;

function getDate() {
    
 let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", option);
  return day;
}

