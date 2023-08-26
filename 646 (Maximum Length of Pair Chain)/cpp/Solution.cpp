class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        sort(pairs.begin(), pairs.end(), [](const vector<int>& a, const vector<int> &b) {
            return a[1]<b[1];
        });
        int res = 0;
        int max = INT_MIN;

        for(vector<int> &pair: pairs){
            if (pair[0]>max){
                res++;
                max=  pair[1];
            }
        }
        return res;
    }
};