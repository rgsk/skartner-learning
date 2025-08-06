# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def getMiddleElementOfLinkedList(self, head: ListNode) -> int:
        slow = head
        fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow.data


# tests-start
list1 = ListNode(1, ListNode(8, ListNode(3)))
list2 = ListNode(1, ListNode(3, ListNode(8, ListNode(5))))
sol = Solution()
print(sol.getMiddleElementOfLinkedList(list1))
print(sol.getMiddleElementOfLinkedList(list2))
# tests-end

'''output
8
3
'''
