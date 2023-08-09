class Solution {
public:

    bool possible(int mid, vector<int> &nums, int p){
        int cnt = 0, i = 1;
        while (i<nums.size()){
            if (abs(nums[i]-nums[i-1]) <= mid) {
                cnt++;
                i++;
            }
            i++;
        }
        return cnt>=p;
    }

    int minimizeMax(vector<int>& nums, int p) {
        sort(nums.begin(),nums.end());
        int low = 0, high = nums.back();
        int ans = -1;
        while (low<=high){
            int mid =(low+high)>>1;

            if (possible(mid,nums,p)){
                ans = mid;
                high = mid-1;
            }else{
                low =mid+1;
            }
        }
        return ans;
    }
};