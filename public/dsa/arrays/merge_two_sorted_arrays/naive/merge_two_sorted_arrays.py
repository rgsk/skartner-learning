from typing import List


class Solution:
    def mergeSortedArrays(self, A: List[int], B: List[int]) -> List[int]:
        C = [0] * (len(A) + len(B))
        for i in range(len(A)):
            C[i] = A[i]
        for i in range(len(B)):
            C[len(A) + i] = B[i]
        C.sort()
        return C


# tests-start
A = [1, 2, 3, 4, 4]
B = [2, 4, 5, 5]
sol = Solution()
print(sol.mergeSortedArrays(A, B))
# tests-end

'''output
[1, 2, 2, 3, 4, 4, 4, 5, 5]
'''
