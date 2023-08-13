/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {

  const dp = new Map();

  const solve = (idx) => {
      if (idx==nums.length) return true;

      if (dp.has(idx)) return dp.get(idx);

      let first = false, second= false;

      if (idx+1 < nums.length) {
          if (nums[idx]==nums[idx+1]){
              first = solve(idx+2,nums);
          }
      }

      if (idx+2 < nums.length){
          let a = nums[idx]==nums[idx+1] && nums[idx+1]==nums[idx+2];
          let b = nums[idx+1]-nums[idx]==1 && nums[idx+2]-nums[idx+1]==1;

          if (a||b){
              second = solve(idx+3,nums);
          }
      }

      let res = first || second;
      dp.set(idx, res);
      return res;
  }

  return solve(0);

};