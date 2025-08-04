from bisect import bisect_left
from typing import List


class Solution:
    def getNegativeNumbersCount(self, arr: List[int]) -> int:
        return bisect_left(arr, 0)


# tests-start
arr = [-5, -3, -2, 3, 4, 6, 7, 8]
sol = Solution()
print(sol.getNegativeNumbersCount(arr))
# tests-end


'''output
3
'''
