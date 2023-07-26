class Solution {
public:

    bool possible(vector<int>& dist, double hour, int n, int s){
        double total = 0.0;
        for(int i =0;i<n-1;i++){
            total += ceil(1.0*dist[i]/s);
        }
        total+= (1.0*dist[n-1]/s);
        return total<=hour;

    }
    int minSpeedOnTime(vector<int>& dist, double hour) {
        int n = dist.size();
        if (n>ceil(hour)) return -1;
        int low=  1, high = 1e7;

        while (low<=high){
            int mid = (low+high)>>1;
            if (possible(dist, hour, n , mid)) high = mid-1;
            else low = mid+1;
        }
        return low;
    }
};