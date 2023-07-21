class Solution {
    public int findNumberOfLIS(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        int[] cnt = new int[n];
        Arrays.fill(dp,1);
        Arrays.fill(cnt,1);

        int maximum = 1;

        for(int i = 0;i<n;i++){
            for(int j =0;j<i;j++){
                if (nums[i]>nums[j]){
                    if (dp[i]< dp[j]+1){
                        dp[i] = dp[j]+1;
                        cnt[i] = cnt[j];
                    }
                    else if(dp[i]==dp[j]+1){
                        cnt[i]+=cnt[j];
                    }
                }
            }
            maximum = Math.max(maximum, dp[i]);
        }
        int res =0;
        for(int i =0;i<n;i++){
            if (dp[i]==maximum) res+=cnt[i];
        }
        return res;
    }
}