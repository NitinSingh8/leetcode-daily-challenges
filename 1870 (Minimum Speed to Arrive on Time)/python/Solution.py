class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        n = len(dist)
        if (n> ceil(hour)): return -1

        low ,high =1, 10**7

        def possible(speed):
            # return sum(ceil(dist[i]/spped) if i!=n-1 else dist[i]/speed for i in range(n)) <=hour
            total = 0
            for i in range(n-1):
                total+= ceil(dist[i]/speed)
            
            total+=dist[n-1]/speed
            return total<=hour


        while low<=high:
            mid = (low+high)>>1
            if possible(mid):
                high = mid-1
            else:
                low = mid+1
        return low