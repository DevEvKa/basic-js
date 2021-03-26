const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  if ( !Array.isArray(matrix) || matrix.length==0) {
    return false
  } else {

    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[i].length; j++) {
        if (matrix[i][j] == '^^')
          counter++;
      }
    }
  }
  return counter;
};
