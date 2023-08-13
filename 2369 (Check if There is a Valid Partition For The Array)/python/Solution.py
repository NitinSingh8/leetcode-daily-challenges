class Solution:
    def validPartition(self, nums: List[int]) -> bool:

        @cache
        def solve(idx):
            if idx==len(nums):
                return True

            first, second = False,False

            if idx+1 < len(nums):
                if (nums[idx]==nums[idx+1]):
                    first = solve(idx+2)
            
            if idx+2 < len(nums):
                a = nums[idx]==nums[idx+1] == nums[idx+2]
                b = nums[idx+1]-nums[idx]==1 and nums[idx+2]-nums[idx+1]==1
                if a or b:
                    second = solve(idx+3)
            
            # res = first or second

            return first or second

        return solve(0)