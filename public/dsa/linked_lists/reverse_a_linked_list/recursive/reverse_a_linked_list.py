
# defs-start
import sys

sys.setrecursionlimit(10**6)


class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def reverseLinkedList(self, head: ListNode) -> ListNode:
        if head and head.next:
            last = self.reverseLinkedList(head.next)
            head.next.next = head
            head.next = None
            return last
        return head


# tests-start
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
sol = Solution()
res = sol.reverseLinkedList(head)

temp = res
while temp:
    print(temp.data, end=' ')
    temp = temp.next

# tests-end


'''output
4 3 2 1
'''
