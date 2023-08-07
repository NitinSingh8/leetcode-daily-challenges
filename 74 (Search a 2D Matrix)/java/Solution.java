class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int low = 0;
        int high = rows*cols-1;

        while (low<=high){
            int mid = (low+high)>>1;
            
            int cr = mid/cols;
            int cc = mid%cols;

            if (matrix[cr][cc] == target) return true;
            if (matrix[cr][cc] > target) high = mid-1;
            else low = mid +1;
        }
        return false;
    }
}