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
        while k > 1:
            temp = temp.next
            k -= 1
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
