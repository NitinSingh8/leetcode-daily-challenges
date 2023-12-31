class Solution {
public:
    int minimumDeleteSum(string s1, string s2) {
        int n = s1.length(), m = s2.length();

        vector<vector<int>> dp(n+1, vector<int>(m+1,0));

        for(int row = 1;row<=n;row++){
            dp[row][0] = dp[row-1][0]+int(s1[row-1]);
        }
        for(int col = 1; col<=m;col++){
            dp[0][col] = dp[0][col-1]+ int(s2[col-1]);
        }

        for(int i = 1;i<=n;i++){
            for(int j = 1;j<=m;j++){
                if (s1[i-1]==s2[j-1]){
                    dp[i][j] = dp[i-1][j-1];
                }else{
                    dp[i][j] = min(dp[i][j-1]+int(s2[j-1]) , dp[i-1][j]+ int(s1[i-1]));
                }
            }
        }
        return dp[n][m];
    }
};