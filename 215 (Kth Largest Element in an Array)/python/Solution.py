class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:

        mheap = []

        for i in range(k):
            heapq.heappush(mheap, nums[i])
        

        for i in range(k,len(nums)):
            if nums[i]>mheap[0]:
                heapq.heappop(mheap)
                heapq.heappush(mheap,nums[i])

        return mheap[0]