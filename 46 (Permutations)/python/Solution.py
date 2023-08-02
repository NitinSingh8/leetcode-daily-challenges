class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res=  []
        def solve(temp):
            if len(temp)==len(nums):
                res.append(temp[::])
                return
            
            for val in nums:
                if val in temp: continue
                solve(temp+[val])
        solve([])
        return res