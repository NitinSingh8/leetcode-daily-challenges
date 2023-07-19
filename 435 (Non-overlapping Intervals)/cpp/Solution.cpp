class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.size()<=1) return 0;

        int res =0;
        sort(intervals.begin(), intervals.end(), [](const auto& a, const auto &b){
            return a[0]<b[0];
        });

        vector<int> prev = intervals[0];
        for(int i =1;i<intervals.size();i++){
            vector<int> curr = intervals[i];
            if (prev[1]>curr[0]){
                res++;

                if (prev[1]>curr[1]){
                    prev = curr;
                }
            }else{
                prev = curr;
            }
        }
        return res;
    }
};