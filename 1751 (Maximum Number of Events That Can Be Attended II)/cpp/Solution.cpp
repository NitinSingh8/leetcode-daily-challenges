class Solution {
public:

    int solve(int idx, int k , vector<vector<int>> &events, vector<int> &starts, vector<vector<int>> &dp){
        if (k==0 || idx>=events.size()) return 0;
        if (dp[idx][k]!=-1) return dp[idx][k];
        int new_idx = std::upper_bound(starts.begin(), starts.end(), events[idx][1]) - starts.begin();
        dp[idx][k] = max(solve(idx+1,k,events,starts,dp), events[idx][2]+ solve(new_idx,k-1,events,starts,dp));
        return dp[idx][k];
    }
    int maxValue(vector<vector<int>>& events, int k) {
        sort(events.begin(),events.end());
        vector<int> starts;
        for(int i = 0;i<events.size();i++){
            starts.push_back(events[i][0]);
        }
        vector<vector<int>> dp(events.size(), vector<int>(k+1,-1));
        return solve(0,k,events,starts,dp);
    }
};