class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        nums.sort()

        low ,high = 0,nums[-1]
        ans = -1


        def possible(mid):
            cnt , i = 0,1
            while i<len(nums):
                if abs(nums[i]-nums[i-1]) <= mid:
                    cnt+=1
                    i+=1
                
                i+=1
            return cnt>=p

        while low<=high:
            mid = (low+high)>>1

            if (possible(mid)):
                ans = mid
                high = mid-1
            else:
                low  =mid+1
            
        return ans