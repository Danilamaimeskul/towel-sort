
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  for(let i in matrix){
    if(i % 2 === 0){
      for(let j in matrix[i]){
        result.push(matrix[i][j]);
      }
    }
    else{
      for(let j in matrix[i]){
        result.push(matrix[i][matrix[i].length - 1 - j ]);
      }
    }
  }
  return result;

}
