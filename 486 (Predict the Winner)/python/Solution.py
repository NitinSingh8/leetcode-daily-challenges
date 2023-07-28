class Solution:
    def PredictTheWinner(self, nums: List[int]) -> bool:

        @lru_cache
        def solve(i,j):
            if i>j: return 0
            first = nums[i] + min(solve(i+1,j-1), solve(i+2,j))
            last = nums[j] + min(solve(i,j-2), solve(i+1,j-1))

            return max(first,last)
        
        p1_score = solve(0,len(nums)-1)
        return p1_score>= (sum(nums)-p1_score)