
# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def printLinkedList(self, head: ListNode) -> None:
        temp = head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next


# tests-start
head = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
sol = Solution()
sol.printLinkedList(head)

# tests-end

'''output
1 3 4 7 
'''
