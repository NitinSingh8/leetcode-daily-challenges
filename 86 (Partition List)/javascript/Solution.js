/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let firstPartition = new ListNode();
  let secondPartition = new ListNode();

  let first = firstPartition;
  let second = secondPartition;

  while (head!=null){
      if (head.val<x){
          first.next = head;
          first = head;
      }else{
          second.next = head;
          second = head;
      }

      head = head.next;
  }

  second.next = null;
  first.next = secondPartition.next;
  return firstPartition.next;
};