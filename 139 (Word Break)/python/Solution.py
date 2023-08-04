class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:

        wordSet = set(wordDict)

        @cache
        def solve(idx):
            if idx==len(s): return True

            for i in range(idx+1, len(s)+1):
                if s[idx:i] in wordSet and solve(i):  return True

            return False
        
        return solve(0)