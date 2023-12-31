/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the
image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
place?
*/

console.log("---------------Approach 1------------------");
/* for NxM matrix - similar but not correct as per question*/
function rotateMatrix(mat) {
  const n = mat.length;
  const m = mat[0].length;
  const newMat = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      newMat[j][n - i - 1] = mat[i][j];
    }
  }
  return newMat;
}

// Function to print the matrix
function displayMatrix(mat) {
  const n = mat.length;
  const m = mat[0].length;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < m; j++) {
      row += mat[i][j] + " ";
    }
    console.log(row);
  }
  console.log("");
}

// Driver code

// Test Case 1
const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// Function call
const rotatedMat = rotateMatrix(mat);

// Print rotated matrix
displayMatrix(rotatedMat);

console.log("---------------Approach 2 -----------------");

/* 
temp = top[i];
top[i] = left[i];
left[i] = bottom[i];
bottom[i] = right[i]
right[i] = temp
*/

function rotate(matrix) {
  if (matrix.length === 0 || matrix.length != matrix[0].length) {
    return false;
  }
  let n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; //Saves top value
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(rotate(matrix));
