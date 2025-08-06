# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def mergeTwoSortedList(self, firstList: ListNode, secondList: ListNode) -> ListNode:
        dummy = ListNode(-1)
        temp = dummy
        while firstList and secondList:
            if firstList.data < secondList.data:
                temp.next = firstList
                firstList = firstList.next
            else:
                temp.next = secondList
                secondList = secondList.next
            temp = temp.next
        temp.next = firstList if firstList else secondList
        return dummy.next


# tests-start
A = ListNode(2, ListNode(3, ListNode(7)))
B = ListNode(1, ListNode(4, ListNode(5)))
sol = Solution()
C = sol.mergeTwoSortedList(A, B)

temp = C
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
1 2 3 4 5 7
'''
