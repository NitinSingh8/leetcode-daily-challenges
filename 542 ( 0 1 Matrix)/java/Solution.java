class Pair{
    int row, col;
    Pair(int row, int col){
        this.row = row;
        this.col = col;
    }
}

class Solution {
    public int[][] updateMatrix(int[][] mat) {
        Queue<Pair> q = new LinkedList<>();
        int n = mat.length;
        int m = mat[0].length;

        for(int i =0;i<n;i++){
            for(int j = 0;j<m;j++){
                if (mat[i][j]==0) q.add(new Pair(i,j));
                else mat[i][j] = -1;
            }
        }

        while (!q.isEmpty()){
            Pair cell = q.poll();

            int[][] dir = {{0,1},{0,-1},{1,0},{-1,0}};
            for(int d[]: dir){
                int cr = cell.row+d[0];
                int cc = cell.col + d[1];

                if (cr<0 || cc<0 || cr>=n || cc>=m || mat[cr][cc]!=-1) continue;
                mat[cr][cc] = mat[cell.row][cell.col]+1;
                q.add(new Pair(cr,cc));

            }
        }
        return mat;
    }
}