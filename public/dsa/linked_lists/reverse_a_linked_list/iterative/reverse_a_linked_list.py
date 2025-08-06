
# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def reverseLinkedList(self, head: ListNode) -> ListNode:
        cur = head
        prev = None
        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        return prev


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
