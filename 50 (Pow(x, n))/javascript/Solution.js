/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n<0){
      n = -n;
      x = 1/x;
  }
  let res= 1.0;
  while (n!=0){
      if (n&1) res*=x;
      x*=x;
      n>>>=1;
  }
  return res;
};