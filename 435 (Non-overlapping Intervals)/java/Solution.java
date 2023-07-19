class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length <=1) return 0;

        int res =0;
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

        int[] prev = intervals[0];
        for(int i = 1;i<intervals.length;i++){
            int[] curr = intervals[i];

            if (prev[1]>curr[0]){
                res++;
                if (prev[1]>curr[1]){
                    prev= curr;
                }

            }else{
                prev = curr;
            }
        }
        return res;
    }
}