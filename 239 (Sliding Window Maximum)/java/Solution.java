class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> dq = new ArrayDeque<>();
        int[] res = new int[1+nums.length-k];
        int index = 0;

        for(int i = 0;i<k-1;i++){
            while (!dq.isEmpty() && (nums[dq.peekLast()]<nums[i])){
                dq.pollLast();
            }
            dq.offerLast(i);
        }

        
        for(int i = k-1;i<nums.length;i++){
            while (!dq.isEmpty() && (nums[dq.peekLast()]<nums[i])){
                dq.pollLast();
            }
            dq.offerLast(i);
            if (i-k==dq.peekFirst()) dq.pollFirst();

            res[index++] = nums[dq.peekFirst()];
        }
        return res;
    }
}