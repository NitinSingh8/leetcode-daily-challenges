class Solution:
    def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:

        n,m = len(grid), len(grid[0])
        if (grid[0][0]==1 or grid[n-1][m-1]==1): return 0


        @cache
        def solve(i,j):
            if i==n-1 and j==m-1: return 1

            if i>=n or j >= m or grid[i][j]==1: return 0

            return solve(i+1,j) + solve(i,j+1)
    
        return solve(0,0)