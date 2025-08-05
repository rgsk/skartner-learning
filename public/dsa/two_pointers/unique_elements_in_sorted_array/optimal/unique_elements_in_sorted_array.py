from typing import List


class Solution:
    def removeDuplicates(self, A: List[int]) -> int:
        cur = A[0]
        unique = 1
        for i in range(1, len(A)):
            if A[i] != cur:
                cur = A[i]
                unique += 1
        return unique


# tests-start
A = [1, 2, 3, 3, 3, 4, 5, 5]
sol = Solution()
print(sol.removeDuplicates(A))
# tests-end

'''output
5
'''
