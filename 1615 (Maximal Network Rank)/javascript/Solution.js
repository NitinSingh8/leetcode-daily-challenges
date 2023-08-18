/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  const directlyRoad = new Map();
  const adj_mat = Array.from({length: n}, ()=> new Array(n).fill(0));

  for(const [a,b] of roads){
      adj_mat[a][b] =1;
      adj_mat[b][a] = 1;

      // a ---> b

      directlyRoad.set(a, (directlyRoad.get(a)|| 0)+1);
      directlyRoad.set(b, (directlyRoad.get(b) || 0)+1);
  }

  let res =0;
  for(let i = 0;i<n;i++){
      for(let j = i+1;j<n;j++){
          let total_network_rank = (directlyRoad.get(i)||0) + (directlyRoad.get(j)||0);
          if (adj_mat[i][j]==1){
              total_network_rank--;
          }
          res = Math.max(res, total_network_rank);
      } 
  }
  return res;
};