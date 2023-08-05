# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        
        def solve(start,end):
            if start>end: return [None]
            res = []
            for i in range(start,end+1):
                left_side = solve(start,i-1)
                right_side = solve(i+1,end)
            
                for left_node in left_side:
                    for right_node in right_side:
                        root = TreeNode(i)
                        root.left = left_node
                        root.right = right_node
                        res.append(root)
            return res
        return solve(1,n)