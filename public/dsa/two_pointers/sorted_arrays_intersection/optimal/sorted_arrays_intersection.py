from typing import List


class Solution:
    def intersection(self, A: List[int], B: List[int]) -> List[int]:
        result = []
        i = 0
        j = 0
        while i < len(A) and j < len(B):
            if A[i] < B[j]:
                i += 1
            elif B[j] < A[i]:
                j += 1
            else:
                result.append(A[i])
                i += 1
                j += 1
        return result


# tests-start
A = [1, 3, 4, 5, 5, 6, 6, 7]
B = [2, 5, 6, 6, 7, 8]
sol = Solution()
print(sol.intersection(A, B))
# tests-end

'''output
[5, 6, 6, 7]
'''
