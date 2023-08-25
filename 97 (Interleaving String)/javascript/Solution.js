/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length+s2.length !=s3.length) return false;
  let n = s1.length;
  let m = s2.length;
  const dp = new Array(n+1).fill(-1).map(() => new Array(m+1).fill(-1));

  const solve = (i,j) => {
      if (i==n && j==m) return true;

      if (dp[i][j]!=-1){
          return dp[i][j];
      }

      let a = false, b = false;
      if (i<n && s1[i]==s3[i+j]){
          a = solve(i+1,j);
      }
      if (j<m && s2[j]==s3[i+j]){
          b = solve(i,j+1);
      }

      dp[i][j] = a||b;
      return dp[i][j];
  }  

  return solve(0,0);
};