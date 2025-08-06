# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def removeOccurrences(self, head: ListNode, key: int) -> ListNode:
        while head and head.data == key:
            head = head.next

        temp = head
        while temp and temp.next:
            if temp.next.data == key:
                temp.next = temp.next.next
            else:
                temp = temp.next

        return head


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
