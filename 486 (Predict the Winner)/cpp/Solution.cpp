class Solution {
public:

    int solve(int i , int j, vector<int>& nums){
        if (i>j) return 0;
        int first = nums[i] + min(solve(i+1,j-1,nums), solve(i+2,j,nums));
        int second = nums[j]+min(solve(i,j-2,nums),solve(i+1,j-1,nums));
        return max(first,second);
    }
    bool PredictTheWinner(vector<int>& nums) {
        int total = accumulate(nums.begin(),nums.end(),0);
        int p1_score = solve(0,nums.size()-1,nums);
        return p1_score>=(total-p1_score);
    }
};