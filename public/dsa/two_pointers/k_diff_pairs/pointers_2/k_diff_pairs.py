from collections import defaultdict
from typing import List


class Solution:
    def kDiffPairs(self, A: List[int], k: int) -> int:
        n = len(A)
        l = 0
        r = 0
        result = 0
        while r < n:
            diff = A[r] - A[l]
            if diff == k and l != r:
                result += 1
                while r + 1 < n and A[r] == A[r+1]:
                    r += 1
                l += 1
                r += 1

            elif diff <= k:
                r += 1
            else:
                l += 1
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
