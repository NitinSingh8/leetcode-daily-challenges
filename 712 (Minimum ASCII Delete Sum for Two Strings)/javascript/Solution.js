/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  let n = s1.length, m = s2.length;

  const dp = []
  for (let i = 0;i<=n;i++){
      dp.push(new Array(m+1).fill(0));
  }

  for(let row = 1;row<=n;row++){
      dp[row][0] = dp[row-1][0]+s1.charCodeAt(row-1);
  }

  for(let col = 1;col<=m;col++){
      dp[0][col] = dp[0][col-1] + s2.charCodeAt(col-1);
  }

  for(let i = 1;i<=n;i++){
      for(let j = 1;j<=m;j++){
          if (s1.charAt(i-1)==s2.charAt(j-1)){
              dp[i][j] = dp[i-1][j-1];
          }else{
              dp[i][j] = Math.min(dp[i][j-1] + s2.charCodeAt(j-1),  dp[i-1][j]+s1.charCodeAt(i-1));
          }
      }
  }
  return dp[n][m];
};