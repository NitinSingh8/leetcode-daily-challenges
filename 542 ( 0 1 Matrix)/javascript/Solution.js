/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const q = []
  const n = mat.length, m = mat[0].length;

  for (let i =0;i<n;i++){
      for(let j =0;j<m;j++){
          if (mat[i][j]==0) q.push([i,j]);
          else mat[i][j] = -1;

      }
  }

  while (q.length>0){
      const [oldr, oldc]  = q.shift();
  
      const dir = [[0,1],[0,-1],[1,0],[-1,0]];
      
      for(let i =0;i<4;i++){
          let cr = oldr+dir[i][0];
          let cc = oldc+dir[i][1];

          if (cr>=0 && cc>=0 && cr<n && cc<m && mat[cr][cc]==-1){
              mat[cr][cc] = mat[oldr][oldc]+1;
              q.push([cr,cc]);
          }
      }
  }
  return mat;
};