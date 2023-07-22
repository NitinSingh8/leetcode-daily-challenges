class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        
        @cache
        def solve(r,c,k):
            if k==0:
                return 1.0
            
            prob = 0
            for a,b in [[1,2],[1,-2],[-1,2],[-1,-2],[2,-1],[2,1],[-2,1],[-2,-1]]:
                nr,nc = r+a, c+b

                if not (0<=nr<n) or not(0<=nc<n):
                    continue
                prob += (solve(nr,nc,k-1)/8)
            return prob

        return solve(row,column,k)