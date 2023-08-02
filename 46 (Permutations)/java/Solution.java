class Solution {

    void solve(List<Integer> temp , List<List<Integer>> res, int[] nums){
        if (temp.size()==nums.length){
            res.add(new ArrayList<>(temp));
            return;
        }

        for(int val: nums){
            if (temp.contains(val)) continue;
            temp.add(val);
            solve(temp,res,nums);
            temp.remove(temp.size()-1);
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        solve(temp, res , nums);
        return res;
    }
}