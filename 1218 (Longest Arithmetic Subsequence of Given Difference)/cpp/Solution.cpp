class Solution {
public:
    int longestSubsequence(vector<int>& arr, int difference) {
        int res= 1;
        unordered_map<int,int> dic;
        for(int i =0;i<arr.size();i++){
            int cnt = 1;
            if (dic.find(arr[i]-difference) != dic.end()) cnt = 1+dic[arr[i]-difference];
            dic[arr[i]] = cnt;
            res = max(res, cnt);
        }
        return res;
    }
};