class Solution:
    def soupServings(self, n: int) -> float:
        if n>5000: return 1

        @cache
        def solve(a,b):
            if a<=0 and b<=0: return 0.5
            if a<=0: return 1.0
            if b<=0: return 0

            return 1/4*(solve(a-100,b)+solve(a-75,b-25)+solve(a-50,b-50)+solve(a-25,b-75))
        
        return solve(n,n)