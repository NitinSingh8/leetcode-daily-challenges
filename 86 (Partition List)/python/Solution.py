# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:

        firstPartition = ListNode() # FP
        secondPartition = ListNode() # SP

        first = firstPartition 
        second = secondPartition

        while head:
            if head.val<x: # val < x
                first.next = head # first->next = head
                first = first.next # first = first.next
            else:
                second.next = head
                second = second.next
            
            head = head.next
        second.next = None
        first.next = secondPartition.next
        return firstPartition.next