from typing import List


# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def kthElement(self, head: ListNode, k: int) -> ListNode:
        temp = head
        count = 1

        # Move (k - 1) steps ahead to reach the kth node
        while temp is not None and count < k:
            temp = temp.next
            count += 1

        return temp


# tests-start
head = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
k = 2
sol = Solution()
node = sol.kthElement(head, k)
print(node.data)
# tests-end

'''output
3
'''
