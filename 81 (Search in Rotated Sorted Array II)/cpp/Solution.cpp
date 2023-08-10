class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int low = 0;
        int high = nums.size()-1;

        while (low<=high){
            while (low<high && nums[low]==nums[low+1]) low++;
            while (low<high && nums[high]== nums[high-1]) high--;


            int mid = (low+high)>>1;

            if (nums[mid]==target) return true;

            if (nums[low]<=nums[mid]){
                if (nums[low]<=target && nums[mid]>=target) high = mid-1;
                else low = mid+1;
            }
            else{
                if (nums[mid]<=target && nums[high]>=target) low = mid+1;
                else high = mid-1;
            }
        }
        return false;
    }
};