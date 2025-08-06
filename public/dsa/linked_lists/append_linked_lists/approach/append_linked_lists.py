# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def appendLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        temp = list1
        while temp.next:
            temp = temp.next
        temp.next = list2
        return list1


# tests-start
list1 = ListNode(1, ListNode(3, ListNode(4, ListNode(7))))
list2 = ListNode(6, ListNode(2, ListNode(5)))

sol = Solution()
res = sol.appendLists(list1, list2)

temp = res
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
1 3 4 7 6 2 5
'''
