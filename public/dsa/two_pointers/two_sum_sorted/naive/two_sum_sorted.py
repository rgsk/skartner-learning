from typing import List


class Solution:
    def hasTwoSumZero(self, A: List[int]) -> bool:
        n = len(A)
        for i in range(n):
            for j in range(i + 1, n):
                if A[i] + A[j] == 0:
                    return True
        return False


# tests-start
sol = Solution()
A = [-3, 1, 3, 4]
print(sol.hasTwoSumZero(A))
B = [-2, 1, 3, 4]
print(sol.hasTwoSumZero(B))
# tests-end

'''output
True
False
'''
