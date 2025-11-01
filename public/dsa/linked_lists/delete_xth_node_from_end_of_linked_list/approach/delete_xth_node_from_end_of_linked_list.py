# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def removeXthNodeFromEnd(self, head: ListNode, x: int) -> ListNode:
        # Create a dummy node to handle edge cases (like deleting the head)
        dummy = ListNode(0, head)
        slow = dummy
        fast = dummy

        # Move fast x+1 steps ahead so that slow points to node before target
        for _ in range(x + 1):
            if not fast:
                return head  # x > length of list
            fast = fast.next

        # Move both pointers until fast reaches the end
        while fast:
            fast = fast.next
            slow = slow.next

        # Delete target node
        slow.next = slow.next.next

        return dummy.next


# tests-start
def printList(node):
    while node:
        print(node.data, end=" " if node.next else "\n")
        node = node.next


head = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
sol = Solution()
new_head = sol.removeXthNodeFromEnd(head, 2)
printList(new_head)
# tests-end

'''output
1 2 4
'''
