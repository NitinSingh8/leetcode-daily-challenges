class Solution {

    public boolean solve(int i, int j, String s1, String s2, String s3, int[][] dp){
        if (i==s1.length() && j==s2.length()) return true;

        if (dp[i][j]!=0){
            return dp[i][j]==1;
        }

        boolean a = false, b=  false;
        if (i<s1.length() && s1.charAt(i)==s3.charAt(i+j)){
            a = solve(i+1,j,s1,s2,s3,dp);
        }
        if (j<s2.length() && s2.charAt(j)==s3.charAt(i+j)){
            b = solve(i,j+1,s1,s2,s3,dp);
        }
        dp[i][j] = (a||b) ? 1 : -1;
        return dp[i][j]==1;
        
    }
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) return false;

        int n = s1.length();
        int m = s2.length();
        int dp[][]  = new int[n+1][m+1];

        return solve(0,0, s1,s2,s3,dp);
    }
}