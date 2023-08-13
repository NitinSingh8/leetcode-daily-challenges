class Solution {
    HashMap<Integer,Boolean> dp;

    boolean solve(int idx, int[] nums){
        if (idx==nums.length) return true;

        if (dp.containsKey(idx)) return dp.get(idx);

        boolean first = false, second = false;
        if (idx+1 < nums.length){
            if (nums[idx]==nums[idx+1]){
                first = solve(idx+2,nums);
            }
        }

        if (idx+2 < nums.length){
            boolean a = nums[idx]==nums[idx+1] && nums[idx+1]==nums[idx+2];
            boolean b = nums[idx+1]-nums[idx]==1 && nums[idx+2]-nums[idx+1] == 1;

            if (a || b){
                second = solve(idx+3,nums);
            }
        }

        boolean res = first || second;
        dp.put(idx, res);
        return res;
    }

    public boolean validPartition(int[] nums) {
        dp = new HashMap<>();
        return solve(0,nums);
    }
}