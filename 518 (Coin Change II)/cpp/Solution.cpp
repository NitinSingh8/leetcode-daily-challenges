class Solution {
public:

    int solve(int idx, int amount, vector<int> &coins, map<pair<int,int>,int> &dp){
        if (amount==0) return 1;
        if (dp.find({idx,amount})!=dp.end()) return dp[{idx,amount}];
        if (amount<0 || idx>=coins.size()) return 0;

        int res = solve(idx, amount- coins[idx], coins, dp) + solve(idx+1,amount,coins,dp);
        dp[{idx,amount}] = res;
        return res;
    }

    int change(int amount, vector<int>& coins) {
        map<pair<int,int>, int> dp;
        return solve(0,amount,coins,dp);
    }
};