from typing import Optional, List

# defs-start


class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def removeDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1)
        res_temp = dummy
        current = head
        while current:
            temp = current.next
            duplicates = False
            while temp and temp.data == current.data:
                duplicates = True
                temp = temp.next
            if not duplicates:
                res_temp.next = current
                res_temp = res_temp.next
            current = temp
        res_temp.next = None
        return dummy.next


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
1 4 7
'''
