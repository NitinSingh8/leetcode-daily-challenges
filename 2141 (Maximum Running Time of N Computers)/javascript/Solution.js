/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
  let low = BigInt(1);
  let high = BigInt(0);
  for(const val of batteries){
      high+= BigInt(val);
  }
  high = high/BigInt(n);

  const possible = (mid) => {
      let totaltime= BigInt(0);
      for(const val of batteries){
          totaltime += BigInt(Math.min(val, Number(mid)));
      }
      let computer = totaltime/BigInt(mid);
      return computer>=n;
  }

  while (low<=high){
      let mid = (low+high)/BigInt(2);

      if (possible(mid)) low = mid+BigInt(1);
      else high = mid-BigInt(1);
  }
  return Number(high);
};