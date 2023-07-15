class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        events.sort()
        starts = [s for s,e,v in events]

        @lru_cache
        def solve(idx, k):
            if idx>=len(events) or k==0:
                return 0
            next_event_idx=  bisect.bisect_right(starts,events[idx][1])
            return max(solve(idx+1,k), events[idx][2] + solve(next_event_idx,k-1))

        return solve(0,k)