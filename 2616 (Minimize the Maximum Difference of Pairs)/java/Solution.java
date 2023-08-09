class Solution {

    boolean possible(int[] nums, int p, int mid){
        int cnt = 0, i  =1;
        while(i<nums.length){
            if (Math.abs(nums[i]-nums[i-1]) <= mid){
                cnt++;
                i++;
            }
            i++;
        }
        return cnt>=p;
    }    
    public int minimizeMax(int[] nums, int p) {
        Arrays.sort(nums);
        int low = 0, high = nums[nums.length-1], ans = -1;

        while (low<=high){
            int mid = (low+high)>>1;

            if (possible(nums, p, mid)){
                ans=  mid;
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        return ans;
    }
}