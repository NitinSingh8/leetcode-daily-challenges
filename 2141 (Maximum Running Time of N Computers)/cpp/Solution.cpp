class Solution {
public:
    bool possible(long long time, int n , vector<int>& batteries){
        long long totaltime = 0;
        for(int val: batteries){
            totaltime+=min(static_cast<long long>(val), time);
        }
        long long computers = totaltime/time;
        return computers>=n;
    }
    long long maxRunTime(int n, vector<int>& batteries) {
        long long low = 1;
        long long high = 0;
        for(int val: batteries){
            high += val;
        }
        high = high/n;

        while(low<=high){
            long long mid = (low+high)>>1;
            if (possible(mid,n,batteries)) low = mid+1;
            else high = mid-1;
        }
        return high;
    }
};