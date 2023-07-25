class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        int n = arr.length;
        int low = 0, high = n-1;

        while (low<=high){
            int mid =(low+high)>>1;
            if (mid==0) {
                if (arr[mid]>arr[mid+1]) return mid;
                else low = mid+1;
            }
            else if (mid==n-1){
                if (arr[mid]>arr[mid-1]) return mid;
                else high = mid-1;
            }
            else{
                if (arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) return mid;
                else if (arr[mid]>arr[mid-1]) low=  mid+1;
                else high = mid-1;
            }
        }
        
        return -1;
    }
}