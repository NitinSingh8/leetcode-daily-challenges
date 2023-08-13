class Solution {
public:
    unordered_map<int,bool> dp;

    bool solve(int idx, vector<int>& nums){
        if (idx==nums.size()) return true;

        if (dp.find(idx)!=dp.end()) return dp[idx];

        bool first = false , second = false;
        if (idx + 1 < nums.size()){
            if (nums[idx]==nums[idx+1]) {
                first = solve(idx+2,nums);
            }
        }

        if (idx+2 < nums.size()){
            bool a = nums[idx]==nums[idx+1] && nums[idx+1]==nums[idx+2];
            bool b = (nums[idx+1]-nums[idx]==1 && nums[idx+2]-nums[idx+1]==1);

            if (a || b){
                second = solve(idx+3,nums);
            }
        }


        bool res = first || second;
        dp[idx] = res;
        return res;
    }

    bool validPartition(vector<int>& nums) {
        return solve(0,nums);
    }
};