# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def printLinkedListReverse(self, head: ListNode) -> None:
        if head:
            self.printLinkedListReverse(head.next)
            print(head.data, end=" ")


# tests-start
head = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
sol = Solution()
sol.printLinkedListReverse(head)
# tests-end

'''output
7 4 3 1
'''
