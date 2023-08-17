class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        queue = collections.deque()
        n,m = len(mat), len(mat[0])

        for i in range(n):
            for j in range(m):
                if (mat[i][j]==0): queue.append((i,j))
                else: mat[i][j] = -1

        
        while queue:
            oldr, oldc = queue.popleft()

            for i,j in [[0,1],[0,-1],[1,0],[-1,0]]:
                cr = oldr+i
                cc = oldc+j

                if cr<0 or cc<0 or cr>=n or cc>=m or mat[cr][cc]!=-1: continue
                mat[cr][cc] = mat[oldr][oldc]+1
                queue.append((cr,cc))
        
        return mat