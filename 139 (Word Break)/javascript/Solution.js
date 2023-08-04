/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordset = new Set(wordDict);
  const dp = new Map();

  const solve = (idx) => {
      if (idx==s.length) return true;
      if (dp.has(idx)) return dp.get(idx);

      for(let i = idx+1;i<=s.length;i++){
          if (wordset.has(s.substring(idx,i)) && solve(i)){
              dp.set(idx,true);
              return true;
          }
      }
      dp.set(idx,false);
      return false;
  }
  return solve(0);
};