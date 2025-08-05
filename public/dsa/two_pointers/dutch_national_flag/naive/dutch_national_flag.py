
from typing import List


class Solution:
    def sortTheArray(self, A: List[int]) -> None:
        A.sort()


# tests-start
A = [2, 2, 0, 1]
sol = Solution()
sol.sortTheArray(A)
print(A)
# tests-end

'''output
[0, 1, 2, 2]
'''
