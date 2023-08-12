/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let n = obstacleGrid.length, m = obstacleGrid[0].length;
  if (obstacleGrid[0][0]==1 || obstacleGrid[n-1][m-1]==1) return 0;

  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  dp[0][0]=1;
  for(let i = 0;i<n;i++){
      for(let j =0;j<m;j++){
          if (obstacleGrid[i][j]==1) continue;
          if (j-1>=0) dp[i][j]+=dp[i][j-1];
          if (i-1>=0) dp[i][j]+=dp[i-1][j];

      }
  }
  return dp[n-1][m-1];
};