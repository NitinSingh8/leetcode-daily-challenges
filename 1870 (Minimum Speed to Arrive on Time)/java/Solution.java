class Solution {
    boolean possible(int[] dist, double hour, int n, int s){
        double total = 0.0;
        for(int i =0;i<n-1;i++){
            total += Math.ceil(1.0*dist[i]/s);

        }
        total+=(1.0*dist[n-1]/s);
        return total<=hour;
    }
    public int minSpeedOnTime(int[] dist, double hour) {
        int n = dist.length;
        if (n>Math.ceil(hour)) return -1;

        int low = 1, high = (int)1e7;
        while (low<=high){
            int mid =(low+high)>>1;
            if (possible(dist,hour, n , mid)) high = mid-1;
            else low = mid+1;

        }
        return low;
    }
}