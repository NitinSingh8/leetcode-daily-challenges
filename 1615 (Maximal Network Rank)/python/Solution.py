class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        
        adj_mat = [[0]*n for _ in range(n)]
        directlyRoad = collections.defaultdict(int)

        for a,b in roads:
            adj_mat[a][b] = 1
            adj_mat[b][a] = 1
            directlyRoad[a]+=1 # a->b
            directlyRoad[b]+=1 # b->a


        res = 0
        for i in range(n):
            for j in range(i+1,n):
                total_network_rank  = directlyRoad[i]+directlyRoad[j]
                if adj_mat[i][j]==1:
                    total_network_rank-=1
                res = max(res, total_network_rank)

        return res