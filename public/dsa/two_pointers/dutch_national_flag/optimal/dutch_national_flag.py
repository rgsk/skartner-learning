
from typing import List


class Solution:
    def sortTheArray(self, A: List[int]) -> None:
        low, mid, high = 0, 0, len(A) - 1

        while mid <= high:
            if A[mid] == 0:
                A[low], A[mid] = A[mid], A[low]
                low += 1
                mid += 1
            elif A[mid] == 1:
                mid += 1
            else:  # nums[mid] == 2
                A[mid], A[high] = A[high], A[mid]
                high -= 1


# tests-start
A = [2, 2, 0, 1]
sol = Solution()
sol.sortTheArray(A)
print(A)
# tests-end

'''output
[0, 1, 2, 2]
'''
