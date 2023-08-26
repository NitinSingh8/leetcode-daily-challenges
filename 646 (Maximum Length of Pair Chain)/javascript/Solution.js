/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a,b) => a[1]-b[1]);

  let res =0;
  let max = Number.MIN_SAFE_INTEGER;

  for(const pair of pairs){
      if (pair[0]>max){
          res++;
          max = pair[1];
      }
  }
  return res;
};