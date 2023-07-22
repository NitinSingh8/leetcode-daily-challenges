class Solution {
public:
    double dp[26][26][101];

    double solve(int r, int c, int k, int n){
        if (dp[r][c][k]!=0.0) return dp[r][c][k];
        if (k==0) return 1.0;
        // [[1,2],[1,-2],[-1,2],[-1,-2],[2,-1],[2,1],[-2,1],[-2,-1]]:
        vector<pair<int,int>> dir = {{1,2},{1,-2},{-1,2},{-1,-2},{2,-1},{2,1},{-2,1},{-2,-1}};
        double prob = 0;
        for(auto move : dir){
            int nr = r+move.first;
            int nc = c+move.second;
            if (nr<0 || nc<0 || nr>=n||nc>=n) continue;

            prob += (solve(nr,nc,k-1,n)/8);

        }
        return dp[r][c][k] = prob;

        
    }

    double knightProbability(int n, int k, int row, int column) {
        memset(dp, 0.0, sizeof(dp));
        return solve(row,column,k,n);
    }
};