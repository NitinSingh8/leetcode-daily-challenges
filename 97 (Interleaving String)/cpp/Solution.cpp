class Solution {
public:
    bool isInterleave(string s1, string s2, string s3) {
        if ((s1.length()+s2.length())!=s3.length()) return false;

        int n = s1.length();
        int m = s2.length();
        vector<vector<int>> dp(n+1, vector<int>(m+1, -1));

        function<bool(int, int)>solve = [&](int i, int j) -> bool {
            if (i==n && j==m) return true;

            if (dp[i][j]!=-1){
                return dp[i][j];
            }
            bool first = false, second = false;
            if (i<n && s1[i]==s3[i+j]){
                first = solve(i+1,j);
            }
            if (j<m && s2[j]==s3[i+j]){
                second = solve(i,j+1);
            }

            dp[i][j] = first||second;
            return dp[i][j];
        };

        return solve(0,0);
    }
};