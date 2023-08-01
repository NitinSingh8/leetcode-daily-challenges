/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = []

  const solve = (curr,k,arr) => {
      if (k==0){
          res.push([...arr]);
          return;
      }
      if (curr>n) return;

      // taking it
      arr.push(curr);
      solve(curr+1,k-1,arr);

      // not taking it
      arr.pop();
      solve(curr+1,k,arr);
  }
  solve(1,k,[]);
  return res
};