/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const s1 = []
  const s2 = []

  while (l1){
      s1.push(l1.val);
      l1 = l1.next;
  }

  while (l2){
      s2.push(l2.val);
      l2 = l2.next;
  }

  let first = 0, second = 0, carr =0;
  let prev=null;
  while (s1.length>0 || s2.length>0 || carr>0){
      if (s1.length>0){
          first=  s1.pop();
      }else{
          first=0;
      }

      if (s2.length>0){
          second = s2.pop();
      }else{
          second = 0;
      }
      let total = first+second+carr;
      carr = total>=10 ? 1 : 0;
      let curr = new ListNode(total%10);
      curr.next = prev;
      prev = curr;
  }
  return prev;
};