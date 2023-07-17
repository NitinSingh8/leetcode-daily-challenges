# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def reverseL(head):
            curr = head
            prev = None

            while curr:
                nextnode= curr.next
                curr.next= prev
                prev = curr
                curr = nextnode
            return prev
        
        def addLL(l1,l2):
            head1 = l1
            head2 = l2
            carr = 0
            prev= None
            # head1 = 2 3 4 5 6
            # head2 = 1 3 4 5 6

            # head1 = 3 6 8 0 3 

            while head1 and head2:
                total = (head1.val+head2.val+carr)
                head1.val = total%10
                carr = total//10
                prev = head1
                head1 = head1.next
                head2 = head2.next
            
            while head1:
                total = (head1.val+carr)
                head1.val = total%10
                carr = total//10
                prev= head1
                head1 = head1.next
            
            while head2:
                total = (head2.val+carr)
                node = ListNode(total%10)
                prev.next = node
                prev = node
                carr = total//10
                head2 = head2.next

            if carr==1:
                prev.next  = ListNode(carr)
            
            return l1
        
        # reverseL
        # addLL
        rl1 = reverseL(l1)
        rl2 = reverseL(l2)
        add = addLL(rl1,rl2)
        res = reverseL(add)
        return res