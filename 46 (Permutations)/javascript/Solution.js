/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []

  const solve = (temp) => {
      if (temp.length==nums.length) {
          res.push([...temp]);
          return;
      }
      for(const val of nums){
          if (temp.includes(val)) continue;
          temp.push(val);
          solve(temp);
          temp.pop();
      }
  }

  solve([]);
  return res;
};