/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  let n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(1));

  for(let i = n-1;i>=0;i--){
      for(let d = 1 ; d<n-i;d++){
          let j = d+i;

          if (d==1){
              dp[i][j] = s[i]==s[j] ? 1: 2;
              continue;
          }

          dp[i][j] = 1001;
          for(let k = i;k<j;k++){
              dp[i][j]  = Math.min(dp[i][j], dp[i][k] + dp[k+1][j]);
          }
          if (s[i]==s[j]){
              dp[i][j]-=1;
          }
      }
  }
  return dp[0][n-1];
  
};