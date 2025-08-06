# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        middle = self.getMiddleNode(head)
        second_half = self.reverse(middle.next)

        first_half = head
        while second_half:
            if first_half.data != second_half.data:
                return False
            first_half = first_half.next
            second_half = second_half.next

        return True

    def getMiddleNode(self, head: ListNode) -> ListNode:
        slow = head
        fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def reverse(self, head: ListNode) -> ListNode:
        prev = None
        current = head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        return prev


# tests-start
ex1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
ex2 = ListNode(1, ListNode(2, ListNode(2, ListNode(1))))

sol = Solution()
print(sol.isPalindrome(ex1))
print(sol.isPalindrome(ex2))
# tests-end

'''output
False
True
'''
