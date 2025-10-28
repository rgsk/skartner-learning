from typing import Optional, List

# defs-start


class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def removeDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        while current:
            temp = current.next
            while temp and temp.data == current.data:
                temp = temp.next
            current.next = temp
            current = temp
        return head


# tests-start
def formList(arr: List[int]):
    if len(arr) == 0:
        return None

    head = ListNode(arr[0])
    curr = head
    for i in range(1, len(arr)):
        curr.next = ListNode(arr[i])
        curr = curr.next
    return head


def printList(head: Optional[ListNode]):
    temp = head
    while temp:
        print(temp.data, end=' ')
        temp = temp.next
    print()


head = formList([1, 2, 2, 2, 3, 3, 4, 7])
sol = Solution()
res = sol.removeDuplicates(head)
printList(res)
# tests-end

'''output
1 2 3 4 7
'''
