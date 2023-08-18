class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        HashMap<Integer,Integer> directlyRoad = new HashMap<>();
        int[][] adj_mat = new int[n][n];

        for(int road[]: roads){
            int a = road[0];
            int b =road[1];
            adj_mat[a][b]  = 1;
            adj_mat[b][a]  = 1;
            directlyRoad.put(a, directlyRoad.getOrDefault(a,0)+1);
            directlyRoad.put(b, directlyRoad.getOrDefault(b,0)+1);
        }


        int res = 0;
        for(int i = 0;i<n;i++){
            for(int j = i+1;j<n;j++){
                int total_network_rank = directlyRoad.getOrDefault(i,0) + directlyRoad.getOrDefault(j,0);
                if (adj_mat[i][j]==1){
                    total_network_rank--;
                } 

                res = Math.max(res, total_network_rank);
            }
        }
        return res;
    }
}