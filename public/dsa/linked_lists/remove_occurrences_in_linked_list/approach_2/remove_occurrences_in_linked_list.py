# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def removeOccurrences(self, head: ListNode, key: int) -> ListNode:
        dummy = ListNode(-1)
        temp1 = head
        temp2 = dummy

        while temp1:
            if temp1.data != key:
                temp2.next = temp1
                temp2 = temp2.next
            temp1 = temp1.next

        temp2.next = None
        return dummy.next


# tests-start
def formList(arr):
    if len(arr) == 0:
        return None

    head = ListNode(arr[0])
    curr = head
    for i in range(1, len(arr)):
        curr.next = ListNode(arr[i])
        curr = curr.next
    return head


arr = [1, 2, 3, 2, 4, 7, 2]
head = formList(arr)
key = 2
sol = Solution()
res = sol.removeOccurrences(head, key)

temp = res
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
1 3 4 7
'''
