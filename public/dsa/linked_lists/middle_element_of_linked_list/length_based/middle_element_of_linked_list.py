# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def getMiddleElementOfLinkedList(self, head: ListNode) -> int:
        length = 0
        temp = head

        while temp:
            length += 1
            temp = temp.next

        mid = length // 2
        if length % 2 == 0:
            mid -= 1

        temp = head
        for _ in range(mid):
            temp = temp.next

        return temp.data


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
