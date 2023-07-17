/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        stack<int> s1;
        stack<int> s2;

        while (l1){
            s1.push(l1->val);
            l1 = l1->next;
        }
        while (l2){
            s2.push(l2->val);
            l2 = l2->next;
        }
        int carr = 0, first = 0, second = 0;
        ListNode* prev=  NULL;
        while (s1.size()>0 || s2.size()>0 || carr>0){
            if (s1.size()>0){
                first = s1.top();
                s1.pop();
            }else{
                first = 0;
            }

            if (s2.size()>0){
                second = s2.top();
                s2.pop();
            }else{
                second = 0;
            }

            int total = first+second+carr;
            carr = total/10;
            ListNode* curr=  new ListNode(total%10);
            curr->next= prev;
            prev = curr;
        }
        return prev;
    }
};