const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
      return 'Unable to determine the time of year!'
    }
  if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
    throw new TypeError;
  }
  let month = date.getMonth();
  if (month == null || isNaN(month)) {
    throw new Error;
  }
  if (month==8 || month==9 || month==10) {
    return 'autumn'
  } else if (month==11 || month==0 || month==1) {
    return 'winter'
  } else if (month==2|| month==3 || month==4) {
    return 'spring'
  } else return 'summer'
};
