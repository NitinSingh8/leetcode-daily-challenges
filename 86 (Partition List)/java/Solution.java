/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode firstPartition = new ListNode();
        ListNode secondPartition = new ListNode();

        ListNode first = firstPartition;
        ListNode second = secondPartition;

        while (head!=null){
            if (head.val <x){
                first.next = head;
                first = first.next;
            }else{
                second.next = head;
                second = second.next;
            }
            head = head.next;
        }

        second.next = null;
        first.next = secondPartition.next;
        return firstPartition.next;
    }
}