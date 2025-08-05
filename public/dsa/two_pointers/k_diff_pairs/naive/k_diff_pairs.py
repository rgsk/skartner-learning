from typing import List


class Solution:
    def kDiffPairs(self, A: List[int], k: int) -> int:
        n = len(A)
        result = 0
        for i in range(n):
            for j in range(i + 1, n):
                if A[j] - A[i] == k:
                    result += 1
        return result


# tests-start
sol = Solution()
A = [1, 3, 5, 7, 10]
print(sol.kDiffPairs(A, 2))
print(sol.kDiffPairs(A, 3))
print(sol.kDiffPairs(A, 1))
# tests-end

'''output
3
1
0
'''
