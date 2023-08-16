/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const dq = []
  const res = []

  for (let i= 0;i<k-1;i++){
      while (dq.length>0 && nums[dq[dq.length-1]] < nums[i]){
          dq.pop();
      }
      dq.push(i);
  }

  for(let i  = k-1;i<nums.length;i++){
      while (dq.length>0 && nums[dq[dq.length-1]] < nums[i]){
          dq.pop();
      }
      dq.push(i);

      if (i-k==dq[0]) dq.shift();
      res.push(nums[dq[0]]);
  }
  return res;
};