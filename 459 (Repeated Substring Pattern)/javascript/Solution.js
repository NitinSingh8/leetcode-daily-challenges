/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let ss = s+s;
  return ss.substring(1,ss.length-1).includes(s);
};