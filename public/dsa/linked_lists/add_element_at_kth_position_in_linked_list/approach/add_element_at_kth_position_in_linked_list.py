# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def addAtkthElement(self, head: ListNode, k: int, node: ListNode) -> ListNode:
        if k == 1:
            node.next = head
            return node
        temp = head
        while k > 2:
            temp = temp.next
            k -= 1
        node.next = temp.next
        temp.next = node
        return head


# tests-start
head = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
sol = Solution()
res = sol.addAtkthElement(head, 2, ListNode(5))

temp = res
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
1 5 3 4 7
'''
