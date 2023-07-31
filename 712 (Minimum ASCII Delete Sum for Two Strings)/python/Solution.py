class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        n = len(s1)
        m = len(s2)

        def get_ascii_sum(s,start,end):
            return sum([ord(c) for c in s[start:end]])

        @cache
        def solve(i,j):
            if i==n and j==m: return 0
            if i==n: return get_ascii_sum(s2,j,m)
            if j==m: return get_ascii_sum(s1,i,n)
        
            if s1[i]==s2[j]:
                return solve(i+1,j+1)
            else:
                return min(solve(i+1,j)+ord(s1[i]), solve(i,j+1)+ord(s2[j]))
            
        return solve(0,0)