class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        queue<pair<int,int>> q;
        int n = mat.size(), m = mat[0].size();

        for(int i =0;i<n;i++){
            for(int j =0;j<m;j++){
                if(mat[i][j]==0) q.push({i,j});
                else mat[i][j] = -1;
            }
        }

        while (!q.empty()){
            auto cell = q.front();
            q.pop();
            int oldr = cell.first;
            int oldc = cell.second;

            int dir[][2] = {{0,1},{0,-1},{1,0},{-1,0}};

            for(int i =0 ;i<4;i++){
                int cr = oldr+dir[i][0];
                int cc = oldc+dir[i][1];

                if (cr<0 || cc<0 || cr>=n || cc>=m || mat[cr][cc]!=-1) continue;
                mat[cr][cc] = mat[oldr][oldc]+1;
                q.push({cr,cc});

            }
        }
        return mat;
    }
};