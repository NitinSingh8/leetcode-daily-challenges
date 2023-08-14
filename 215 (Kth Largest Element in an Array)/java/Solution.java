class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> mheap = new PriorityQueue<>();

        for(int i = 0;i<k;i++){
            mheap.add(nums[i]);
        }

        for(int i = k;i<nums.length;i++){
            if (nums[i]>mheap.peek()){
                mheap.poll();
                mheap.add(nums[i]);
            }
        }
        return mheap.peek();
    }
}