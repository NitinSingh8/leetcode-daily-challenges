class Solution {
public:
    void solve(vector<int> &temp, vector<vector<int>> &res, vector<int> &nums){
        if (nums.size()==temp.size()) {
            res.push_back(temp);
            return;
        }

        for(int val: nums){
            if (find(temp.begin(), temp.end(), val) != temp.end()) continue;
            temp.push_back(val);
            solve(temp,res,nums);
            temp.pop_back();
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> res;
        vector<int> temp;
        solve(temp,res,nums);
        return res;   
    }
};