class Solution {

    int solve(int i, int j, int[] nums){
        if (i>j) return 0;
        int first = nums[i] + Math.min(solve(i+1,j-1,nums), solve(i+2,j,nums));
        int last = nums[j] + Math.min(solve(i,j-2,nums),solve(i+1,j-1,nums));
        return Math.max(first,last);
    }

    public boolean PredictTheWinner(int[] nums) {
        int total = 0;
        for(int val: nums) total+=val;
        int p1_score = solve(0,nums.length-1,nums);
        return p1_score>=(total-p1_score);

    }
}