class Solution {
    
    boolean possible(long time, int n, int[] batteries){
        long totaltime = 0;
        for(int val: batteries){
            totaltime+=Math.min(val, time);
        }
        long computers = totaltime/time;
        return computers>=n;
    }

    public long maxRunTime(int n, int[] batteries) {
        long low =1;
        long high = 0;
        for(int val: batteries){
            high+=val;
        }
        high = high/n;

        while(low<=high){
            long mid = (low+high)>>1;
            if (possible(mid,n,batteries)) low = mid+1;
            else high = mid-1;
        }
        return high;
    }
}