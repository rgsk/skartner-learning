

from typing import List


class Solution:
    def removeOccurences(self, A: List[int], k: int) -> int:
        n = len(A)
        j = 0
        for i in range(n):
            if A[i] != k:
                A[j] = A[i]
                j += 1
        return j


# tests-start

A = [1, 4, 2, 6, 2, 6, 9, 4]
k = 4
sol = Solution()
print(sol.removeOccurences(A, k))

# tests-end

'''output
6
'''
