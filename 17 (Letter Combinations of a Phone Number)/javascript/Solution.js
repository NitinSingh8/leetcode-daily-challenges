/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];

  const dic = {
      '2': 'abc', '3': 'def', '4': 'ghi',
      '5': 'jkl', '6': 'mno', '7': 'pqrs',
      '8': 'tuv', '9': 'wxyz'
  };

  arr = []
  for(const ch of digits){
      arr.push(dic[ch]);
  }

  res = []

  const solve = (idx, temp) => {
      if (idx==arr.length){
          res.push(temp);
          return;
      }
      for(let i =0;i<arr[idx].length;i++){
          solve(idx+1,temp+arr[idx][i]);
      }
  }

  solve(0,"");
  return res;
};