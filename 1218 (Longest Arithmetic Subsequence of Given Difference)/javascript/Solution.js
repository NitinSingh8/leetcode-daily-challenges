/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  let res = 1;
  const dic = new Map();

  for(let i = 0;i<arr.length;i++){
      let cnt  = 1 + (dic.get(arr[i]-difference) || 0);
      res = Math.max(res,cnt);
      dic.set(arr[i], cnt);
  }
  return res;
};