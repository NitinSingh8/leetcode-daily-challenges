class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if (len(intervals)) <=1: return 0

        res = 0
        intervals.sort(key = lambda x: x[0])

        prev = intervals[0]
        for curr in intervals[1:]:
            if prev[1]>curr[0]:
                res+=1

                if prev[1]>curr[1]:
                    prev = curr

            else:
                prev = curr
        return res