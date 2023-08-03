class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits: return []

        
        dic = {"2":"abc","3":'def',"4":"ghi","5":'jkl',"6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}

        arr= []
        for ch in digits:
            arr.append(dic[ch])
        
        res = []
        def solve(idx,temp):
            if idx==len(arr):
                res.append(temp[::])
                return

            for i in range(len(arr[idx])):
                solve(idx+1,temp+arr[idx][i])
        
        solve(0,'')
        return res