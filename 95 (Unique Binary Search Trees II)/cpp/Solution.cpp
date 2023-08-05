/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<TreeNode*> solve(int start, int end){
        vector<TreeNode*> res;
        if (start>end){
            res.push_back(nullptr);
            return res;
        }

        for (int i = start;i<=end;i++){
            auto left_side=  solve(start,i-1);
            auto right_side = solve(i+1,end);

            for(auto left_node: left_side){
                for(auto right_node: right_side){
                    TreeNode* root = new TreeNode(i);
                    root->left = left_node;
                    root->right = right_node;
                    res.push_back(root);
                }
            }
        }
        return res;
    }
    vector<TreeNode*> generateTrees(int n) {
        return solve(1,n);
    }
};