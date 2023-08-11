/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Map();
  const solve = (idx,amount) => {
      if (amount ==0) return 1;
      
      let key = idx+":"+amount;
      if (dp.has(key)) return dp.get(key);

      if (amount<0 || idx>=coins.length) return 0;

      let res = solve(idx,amount-coins[idx]) + solve(idx+1,amount)
      dp.set(key,res);
      return res;
  }
  return solve(0,amount);
};