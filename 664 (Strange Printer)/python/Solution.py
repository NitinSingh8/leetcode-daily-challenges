class Solution:
    def strangePrinter(self, s: str) -> int:
        n = len(s)
        dp = [[1]*n for _ in range(n)]

        for i in range(n-1,-1,-1):
            for d in range(1,n-i):
                j = i+d

                if d==1:
                    dp[i][j] = 1 if s[i]==s[j] else 2
                    continue
                
                dp[i][j] = 1001
                for k in range(i,j):
                    dp[i][j] = min(dp[i][j], dp[i][k]+dp[k+1][j])
            
                if s[i]==s[j]:
                    dp[i][j]-=1
        
        return dp[0][n-1]