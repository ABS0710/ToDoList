

module.exports.getDate = getDate;
function getDate() {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-us", options);
  return day;
}

//can be shorted to

module.exports.getDay = function getDay() {
  var today = new Date();
  var options = {
    weekday: "long",
  };
  // var day = today.toLocaleDateString("en-us", options);
  // return day;
  return today.toLocaleDateString("en-us", options);

}
