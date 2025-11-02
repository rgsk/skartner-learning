# defs-start
class ListNode:
    def __init__(self, data=0, next=None):
        self.data = data
        self.next = next
# defs-end


class Solution:
    def addTwoNumbers(self, firstList: ListNode, secondList: ListNode) -> ListNode:
        # Dummy node to simplify list construction
        dummy = ListNode(0)
        current = dummy
        carry = 0

        # Loop until both lists are exhausted and no carry remains
        while firstList or secondList or carry:
            total = carry

            # Add current node values if available
            if firstList:
                total += firstList.data
                firstList = firstList.next

            if secondList:
                total += secondList.data
                secondList = secondList.next

            # Update carry for next iteration
            carry = total // 10
            digit = total % 10

            # Append new node with the calculated digit
            current.next = ListNode(digit)
            current = current.next

        # Return the head of the resulting list (skipping dummy node)
        return dummy.next


# tests-start
list1 = ListNode(2, ListNode(3, ListNode(1)))
list2 = ListNode(1, ListNode(4, ListNode(5)))

sol = Solution()
res = sol.addTwoNumbers(list1, list2)

temp = res
while temp:
    print(temp.data, end=' ')
    temp = temp.next
# tests-end

'''output
3 7 6
'''
