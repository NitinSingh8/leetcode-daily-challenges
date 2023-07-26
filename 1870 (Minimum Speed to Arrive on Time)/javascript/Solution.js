/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  let n = dist.length;
  if (n>Math.ceil(hour)) return -1;
  
  const possible = (s) => {
      let total = 0.0;
      for(let i = 0;i<n-1;i++){
          total += Math.ceil(dist[i]/s);
      }
      total+=(dist[n-1]/s);
      // console.log(total);
      return total<=hour;
  }

  let low = 1, high = 1e7;
  while (low<=high){
      // console.log(low, high);
      let mid = (low+high)>>1;
      if (possible(mid)) high = mid-1;
      else low = mid+1;
  }
  return low;
};