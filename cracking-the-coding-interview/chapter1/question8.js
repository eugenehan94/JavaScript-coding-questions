/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
its entire row and column are set to 0
*/

const myAttempt = (matrix) => {
  // store row and column that 0 occurs in two arrays, respectively
  // traverse matrix for(i) for(j)
  // find the 0 - get row and column index and store true in array created above
  // create two separate functions - one to turn row to zero, one to turn column to zero

  // Time complexity: O(m * n)
  // Space complexity: O(m + n)
  
  let rows = [];
  let columns = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }
  console.log("columns: ", columns);
  // Converts the column to zero
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      matrix[i][columns[j]] = 0;
    }
  }

  // Converts the row to zero
  console.log("rows: ", rows);
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }
  return matrix;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 1, 7, 8],
  [9, 0, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
const matrixTwo = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

console.log(myAttempt(matrix));
console.log(myAttempt(matrixTwo));
