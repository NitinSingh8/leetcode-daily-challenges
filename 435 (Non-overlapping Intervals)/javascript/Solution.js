/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length<=1) return 0;
  let res = 0;

  intervals.sort((a,b) => a[0]-b[0]);
  // console.log(intervals);
  let prev = intervals[0];
  for(let i =1;i<intervals.length;i++){
      let curr= intervals[i];
      if (prev[1]>curr[0]){
          res++;
          if (prev[1]>curr[1]){
              prev = curr;
          }
      }else{
          prev = curr;
      }
  }
  return res;
};