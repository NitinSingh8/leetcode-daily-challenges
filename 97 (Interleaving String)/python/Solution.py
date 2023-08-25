class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:

        if (len(s1)+len(s2)) != len(s3): return False

        @cache
        def solve(i,j):
            if i==len(s1) and j == len(s2): return True

            a,b= False,False
            if i<len(s1) and s1[i]==s3[i+j]:
                a = solve(i+1,j)

            if j<len(s2) and s2[j]==s3[i+j]:
                b = solve(i,j+1)

            return a or b
        
        return solve(0,0)