/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  const freq = new Array(26).fill(0);

  for(let i = 0;i<s.length;i++){
      freq[s[i].charCodeAt(0)-97]+=1;
  }
  
  let maxfreq = 0, letter  = 0;

  for(let i = 0;i<26;i++){
      if (freq[i]>maxfreq){
          maxfreq = freq[i];
          letter = i;
      }
  }

  if (maxfreq > Math.floor((s.length+1)/2)) return "";

  let idx = 0;
  const res = new Array(s.length).fill('')
  
  while(freq[letter]>0){
      res[idx] = String.fromCharCode(letter+97);
      idx+=2;
      freq[letter]-=1;
  }

  for(let i=0;i<26;i++){
      while (freq[i]>0){
          if (idx>=s.length) idx= 1;
          res[idx] = String.fromCharCode(i+97);
          idx+=2;
          freq[i]-=1;
      }
  }
  return res.join('');
  
};