class Solution {

    int solve(int idx, int amount, int[] coins, HashMap<String,Integer> dp){
        if (amount==0) return 1;
        
        String key = idx+":"+amount;
        if (dp.containsKey(key)) return dp.get(key);
        
        if (amount<0 || idx>=coins.length) return 0;
        int res = solve(idx,amount-coins[idx],coins,dp) + solve(idx+1,amount,coins,dp);
        dp.put(key,res);
        return res;
    }
    public int change(int amount, int[] coins) {
        HashMap<String,Integer> dp = new HashMap<>();
        return solve(0,amount,coins,dp);
    }
}