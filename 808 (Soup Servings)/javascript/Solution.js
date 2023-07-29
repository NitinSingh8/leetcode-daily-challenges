/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  if (n>5000) return 1.0;

  const map = new Map();
  const solve = (a,b) =>{
      if (a<=0 && b<= 0) return 0.5;
      if (a<=0) return 1.0;
      if (b<=0) return 0.0;

      let key = `${a}-${b}`;
      if (map.has(key)) return map.get(key);

      let res = 0.25*(solve(a-100,b) + solve(a-75,b-25) + solve(a-50,b-50) + solve(a-25,b-75));
      map.set(key,res);
      return res;

  }
  return solve(n,n);
};