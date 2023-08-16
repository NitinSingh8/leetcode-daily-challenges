class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:

        dq = collections.deque()
        res = []


        for i in range(k-1):
            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()
            dq.append(i)
        
        
        for i in range(k-1,len(nums)):
            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()
            dq.append(i)

            if (i-k==dq[0]): dq.popleft()

            res.append(nums[dq[0]])

        return res