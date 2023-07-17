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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Deque<Integer> s1 = new ArrayDeque<>();
        Deque<Integer> s2 = new ArrayDeque<>();

        while (l1!=null){
            s1.push(l1.val);
            l1 = l1.next;
        }
        while (l2!=null){
            s2.push(l2.val);
            l2 = l2.next;
        }

        int carr =0, first = 0, second =0;
        ListNode prev = null;

        while (carr>0 || s1.size()>0 || s2.size()>0){
            if (s1.size()>0){
                first= s1.pop();
            }else{
                first  =0;
            }

            if (s2.size()>0){
                second = s2.pop();
            }else{
                second = 0;
            }

            int total = first+second+carr;
            carr = (total/10);
            ListNode curr = new ListNode(total%10);
            curr.next = prev;
            prev= curr;
        }
        return prev;
    }
}