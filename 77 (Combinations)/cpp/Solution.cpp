class Solution {
public:

    void solve(int curr, int k, int n, vector<vector<int>> &res, vector<int> &arr){
        if (k==0){
            res.push_back(arr);
            return;
        }
        if (curr>n){
            return;
        }

        // taking it
        arr.push_back(curr);
        solve(curr+1,k-1,n,res,arr);

        // not taking it
        arr.pop_back();
        solve(curr+1,k,n,res,arr);

    }
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> res;
        vector<int> arr;
        solve(1,k,n,res,arr);
        return res;
    }
};