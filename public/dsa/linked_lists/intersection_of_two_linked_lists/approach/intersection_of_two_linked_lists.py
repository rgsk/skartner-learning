from typing import Optional


# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def getIntersectionNode(self, A: ListNode, B: ListNode) -> Optional[ListNode]:
        tempA, tempB = A, B
        while tempA != tempB:
            tempA = tempA.next if tempA else B
            tempB = tempB.next if tempB else A
        return tempA


# tests-start
C = ListNode(1, ListNode(2))
A = ListNode(11, ListNode(12, ListNode(13, C)))
B = ListNode(21, ListNode(22, C))
sol = Solution()
temp = sol.getIntersectionNode(A, B)
if temp:
    print(temp.data)
else:
    print(-1)
# tests-end

'''output
1
'''
