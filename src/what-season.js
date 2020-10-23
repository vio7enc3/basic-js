const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  'use strict';
  if (!date) {throw new Error('Unable to determine the time of year!');}
  if ( Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error('date argument is invalid');}
    const month = date.getMonth();
  if (month >= 8 && month <= 10){
    return 'autumn';
  }
  else if (month <= 4 && month >= 2) {
    return 'spring';
  }
  else if (5 <= month && month <= 7){
    return 'summer';
  }
  else return 'winter';
};
