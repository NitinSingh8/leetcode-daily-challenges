class Solution {

    boolean solve(int idx, String s, Set<String> wordset, HashMap<Integer,Boolean> dp){
        if (idx==s.length()) return true;
        if (dp.containsKey(idx)) return dp.get(idx);

        for(int i = idx+1;i<=s.length();i++){
            if (wordset.contains(s.substring(idx,i)) && solve(i,s,wordset,dp)){
                dp.put(idx,true);
                return true;
            }
        }
        dp.put(idx,false);
        return false;
    }
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordset = new HashSet<>(wordDict);
        HashMap<Integer,Boolean> dp = new HashMap<>();

        return solve(0,s,wordset,dp);
    }
}