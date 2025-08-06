# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def deleteNode(self, node: ListNode) -> None:
        node.data = node.next.data
        node.next = node.next.next


# tests-start
node = ListNode(2, ListNode(3, ListNode(4)))
head = ListNode(1, node)
sol = Solution()
sol.deleteNode(node)
temp = head
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
1 3 4
'''
