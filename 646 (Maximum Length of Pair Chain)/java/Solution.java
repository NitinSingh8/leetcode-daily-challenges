class Solution {
    public int findLongestChain(int[][] pairs) {
        Arrays.sort(pairs, (a,b) -> a[1]-b[1]);
        int res =0;
        int max = Integer.MIN_VALUE;

        for(int[] pair: pairs){
            if (pair[0]>max){
                res++;
                max = pair[1];
            }
        }
        return res;
    }
}