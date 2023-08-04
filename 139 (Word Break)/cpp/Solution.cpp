class Solution {
public:
    bool solve(int idx, string s , unordered_set<string> &wordset,  unordered_map<int,bool> &dp){
        if (idx==s.size()) return true;
        if (dp.find(idx)!=dp.end()) return dp[idx];

        for(int i = idx+1;i<=s.size();i++){
            if (wordset.count(s.substr(idx,i-idx)) && solve(i,s,wordset,dp)){
                dp[idx] = true;
                return true;
            }
        }
        dp[idx] = false;
        return false;
        
    }

    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordset(wordDict.begin(), wordDict.end());
        unordered_map<int,bool> dp;
        return solve(0,s,wordset,dp);

    }
};