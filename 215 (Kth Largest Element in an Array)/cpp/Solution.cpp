class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int,vector<int>,greater<int>> mheap;
        for(int i = 0;i<k;i++){
            mheap.push(nums[i]);
        }

        for(int i = k;i<nums.size();i++){
            if (nums[i]>mheap.top()){
                mheap.pop();
                mheap.push(nums[i]);
            }
        }

        return mheap.top();
    }
};