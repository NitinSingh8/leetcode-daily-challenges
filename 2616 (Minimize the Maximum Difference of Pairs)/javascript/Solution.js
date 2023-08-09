/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
  nums.sort((a,b)=> a-b);
  let low = 0, high = nums[nums.length-1], ans = -1;

  const possible = (mid) => {
      let cnt = 0, i = 1;
      while(i<nums.length){
          if (Math.abs(nums[i]-nums[i-1])<=mid){
              cnt++;
              i++;
          }
          i++;
      }
      return cnt>=p;
  }

  while(low<=high){
      let mid = (low+high)>>1;

      if (possible(mid)){
          ans = mid;
          high = mid-1;
      }else{
          low = mid+1;
      }
  }
  return ans;
};