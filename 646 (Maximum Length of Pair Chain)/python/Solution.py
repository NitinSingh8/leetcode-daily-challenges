class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key = lambda x: x[1])

        res = 0
        max = float('-inf')

        for a,b in pairs:
            if a>max:
                res+=1
                max = b
        
        return res