/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {

  const solve = (i,j) =>{
      if (i>j) return 0;
      let first = nums[i]+Math.min(solve(i+1,j-1), solve(i+2,j));
      let last = nums[j] + Math.min(solve(i,j-2),solve(i+1,j-1));
      return Math.max(first,last);
  }

  let total =0;
  for(const val of nums) total+=val;
  let p1_score = solve(0,nums.length-1);
  return p1_score>=(total-p1_score);
};