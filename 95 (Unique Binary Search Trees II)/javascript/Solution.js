/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
  const solve = (start , end ) => {
      let res = [];
      if (start>end){
          res.push(null);
          return res;
      }

      for(let i = start ;i<=end;i++){
          let left_side = solve(start,i-1);
          let right_side = solve(i+1,end);

          for(const left_node of left_side){
              for(const right_node of right_side){
                  let root = new TreeNode(i);
                  root.left = left_node;
                  root.right = right_node;
                  res.push(root);
              }
          }
      }
      return res;
  }

  return solve(1,n);
};