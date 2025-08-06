# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def removekthElement(self, head: ListNode, k: int) -> ListNode:
        if k == 1:
            return head.next
        temp = head
        while k > 2:
            temp = temp.next
            k -= 1
        temp.next = temp.next.next
        return head


# tests-start
head = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
sol = Solution()
res = sol.removekthElement(head, 2)

temp = res
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
1 4 7
'''
