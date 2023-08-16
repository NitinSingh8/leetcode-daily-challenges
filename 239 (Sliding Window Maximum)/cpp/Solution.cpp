class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> dq;
        vector<int> res;

        for(int i =0 ;i<k-1;i++){
            while (!dq.empty() && nums[dq.back()]<nums[i]){
                dq.pop_back();
            }
            dq.push_back(i);
        }

        for(int i = k-1;i<nums.size();i++){
            while (!dq.empty() && nums[dq.back()]<nums[i]){
                dq.pop_back();
            }
            dq.push_back(i);

            if (i-k==dq.front()){
                dq.pop_front();
            }
            res.push_back(nums[dq.front()]);
        }
        return res;
    }
};