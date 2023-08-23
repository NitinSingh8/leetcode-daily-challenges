class Solution:
    def reorganizeString(self, s: str) -> str:
        freq = [0]*(26)

        for i in s:
            freq[ord(i)-97]+=1

        maxfreq, letter = 0,0

        for idx,val in enumerate(freq):
            if val>maxfreq:
                maxfreq = val
                letter  = idx

            
        if maxfreq>((len(s)+1)//2): return ""

        res = ['']*len(s)
        idx=  0
        while freq[letter]>0:
            res[idx] = chr(letter+97)
            idx+=2
            freq[letter]-=1
        

        for i in range(26):
            while freq[i]>0:
                if idx>=len(s): idx=1
                res[idx] = chr(i+97)
                idx+=2
                freq[i]-=1
            
        return ''.join(res)
            