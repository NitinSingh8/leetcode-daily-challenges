class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        int res = 1;
        Map<Integer,Integer> dic = new HashMap<>();
        for(int i =0;i<arr.length;i++){
            int cnt  = dic.getOrDefault(arr[i]-difference, 0) + 1;
            res = Math.max(res,cnt);
            dic.put(arr[i],cnt );
        }
        return res;
    }
}