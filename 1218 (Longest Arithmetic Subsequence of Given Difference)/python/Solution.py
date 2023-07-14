class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        dic = {}
        res = 1

        for i in range(len(arr)):
            cnt = dic.get(arr[i]-difference, 0) +1
            dic[arr[i]] = cnt
            res= max(res, cnt)
        return res