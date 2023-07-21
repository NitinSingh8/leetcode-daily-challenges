class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        cnt = [1]*(n)
        dp = [1]*(n)

        maximum = 1
        for i in range(n):
            for j in range(i):

                if nums[i]>nums[j]:
                    if (dp[i]<dp[j]+1):
                        dp[i] = dp[j]+1
                        cnt[i] = cnt[j]

                    elif (dp[i]==dp[j]+1):
                        cnt[i]+=cnt[j]
            
            maximum = max(maximum,dp[i])
        
        # for i in range(n):
        #     if dp[i]==maximum:
        #         res+=cnt[i]

        return sum(b for a,b in zip(dp,cnt) if a==maximum) # 