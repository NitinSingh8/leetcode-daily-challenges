/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  let n = nums.length;
  const dp = new Array(n).fill(1);
  const cnt = new Array(n).fill(1);
  let maximum = 1;

  for(let i =0;i<n;i++){
      for(let j = 0;j<i;j++){
          if (nums[i]>nums[j]){
              if (dp[i]<dp[j]+1){
                  dp[i] = dp[j]+1;
                  cnt[i] = cnt[j];
              }
              else if (dp[i]==dp[j]+1){
                  cnt[i]+=cnt[j];
              }
          }
          maximum = Math.max(maximum, dp[i]);
      }
  }
  let res= 0;
  for(let i = 0;i<n;i++){
      if (dp[i]==maximum) res+=cnt[i];
  }
  return res;
};