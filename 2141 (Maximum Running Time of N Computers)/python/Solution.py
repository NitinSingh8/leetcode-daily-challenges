class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:

        low = 1
        high = sum(batteries)//n

        def possible(time):
            totaltime = sum(min(time,val) for val in batteries)
            computers = totaltime//time # 
            return computers>=n

        while low<=high:
            mid = (low+high)>>1
            if (possible(mid)):
                low = mid+1
            else:
                high = mid-1
        return high