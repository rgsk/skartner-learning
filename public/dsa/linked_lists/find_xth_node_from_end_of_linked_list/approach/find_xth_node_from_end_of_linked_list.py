# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def xthNodeFromEnd(self, head: ListNode, x: int) -> ListNode:
        fast = head
        for _ in range(x):
            if not fast:
                return None  # x > length
            fast = fast.next

        slow = head
        while fast:
            fast = fast.next
            slow = slow.next

        return slow


# tests-start
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
sol = Solution()
print(sol.xthNodeFromEnd(head, 2).data)
# tests-end

'''output
3
'''
