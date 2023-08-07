class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])

        low = 0
        high = rows*cols-1

        while low<=high:
            mid= (low+high)>>1

            cr = mid//cols
            cc = mid%cols

            if matrix[cr][cc] == target: return True

            if matrix[cr][cc] > target: high =  mid-1
            else: low = mid+1
        
        return False