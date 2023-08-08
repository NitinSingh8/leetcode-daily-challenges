class Solution:
    def search(self, nums: List[int], target: int) -> int:

        low, high = 0, len(nums)-1

        while low<=high:
            mid = (low+high)>>1
            if (nums[mid]==target): return mid


            if nums[mid]>=nums[low]:
                if nums[mid]>target:
                    if nums[low]<=target:
                        high = mid-1
                    else:
                        low = mid+1
                else:
                    low = mid+1
            
            else:
                if nums[mid]<target:
                    if nums[high]>=target:
                        low = mid+1
                    else:
                        high = mid-1
                else:
                    high = mid-1
            
        return -1