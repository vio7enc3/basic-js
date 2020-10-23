const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = '';
  let arr = matrix.join(',').split(',');
  for (var i = 0; i < arr.length; i++){
    if(arr[i] === '^^'){
      cats += arr[i] + ' ';
    }
} return cats.split(' ').length - 1;
}