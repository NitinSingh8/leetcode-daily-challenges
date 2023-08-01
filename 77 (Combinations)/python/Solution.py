class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:

        res= []
        def solve(curr,k,arr):
            if k==0:
                res.append(arr[::])
                return
            
            if curr>n:
                return

            #taking the curr
            arr.append(curr)
            solve(curr+1,k-1,arr)

            # not taking it
            arr.pop()
            solve(curr+1,k,arr)
        
        solve(1,k,[])
        return res