class Solution {
    public int uniquePathsWithObstacles(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        if (matrix[0][0]==1 || matrix[n-1][m-1]==1) return 0;

        int[][] dp = new int[n][m];

        dp[0][0] = 1;
        for(int i = 0;i<n;i++){
            for(int j =0;j<m;j++){
                if (matrix[i][j]==1) continue;

                if (i-1>=0) dp[i][j] += dp[i-1][j];
                if (j-1>=0) dp[i][j] += dp[i][j-1];

            }
        }
        return dp[n-1][m-1];
    }
}