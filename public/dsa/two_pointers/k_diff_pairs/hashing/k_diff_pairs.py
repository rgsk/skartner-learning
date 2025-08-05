from collections import defaultdict
from typing import List


class Solution:
    def kDiffPairs(self, A: List[int], k: int) -> int:
        n = len(A)
        result = 0
        hash = defaultdict(int)

        for i in range(n):
            if k == 0:
                if hash[A[i]] == 1:
                    result += 1
            else:
                if hash[A[i] - k] != 0 and hash[A[i]] == 0:
                    result += 1
            hash[A[i]] += 1

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
