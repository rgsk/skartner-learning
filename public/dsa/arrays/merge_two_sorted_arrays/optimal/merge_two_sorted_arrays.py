from typing import List


class Solution:
    def mergeSortedArrays(self, A: List[int], B: List[int]) -> List[int]:
        nA = len(A)
        nB = len(B)
        nC = nA + nB
        C = [0 for _ in range(nC)]
        iA = 0
        iB = 0
        iC = 0
        while iA < nA and iB < nB:
            if A[iA] < B[iB]:
                C[iC] = A[iA]
                iA += 1
                iC += 1
            else:
                C[iC] = B[iB]
                iB += 1
                iC += 1
        while iA < nA:
            C[iC] = A[iA]
            iA += 1
            iC += 1
        while iB < nB:
            C[iC] = B[iB]
            iB += 1
            iC += 1
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
