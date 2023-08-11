class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        

        @cache
        def solve(idx,amount):
            if amount ==0: return 1
            if amount<0 or idx>=len(coins): return 0
            return solve(idx,amount-coins[idx]) + solve(idx+1,amount)
        
        return solve(0,amount)