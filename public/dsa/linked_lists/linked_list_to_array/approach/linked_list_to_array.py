from typing import List


# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def linkedListToArray(self, head: ListNode) -> List[int]:
        arr = []
        temp = head
        while temp:
            arr.append(temp.data)
            temp = temp.next
        return arr


# tests-start
head = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
sol = Solution()
print(sol.linkedListToArray(head))
# tests-end

'''output
[1, 3, 4, 7]
'''
