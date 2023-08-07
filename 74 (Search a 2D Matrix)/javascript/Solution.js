/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let low = 0, high = rows*cols-1;

  while (low<=high){
      let mid = (low+high)>>1;

      let cr = Math.floor(mid/cols), cc = mid%cols;

      if (matrix[cr][cc]==target) return true;
      if (matrix[cr][cc] > target) high = mid-1;
      else low = mid+1;
  }
  return false;
};