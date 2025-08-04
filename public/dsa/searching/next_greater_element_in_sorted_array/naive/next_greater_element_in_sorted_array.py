from bisect import bisect_right
from typing import List


class Solution:
    def getNextGreaterElement(self, arr: List[int], key: int) -> int:
        n = len(arr)
        if arr[n-1] <= key:
            return key
        for i in range(n):
            if arr[i] > key:
                return arr[i]


# tests-start
arr = [1, 2, 3, 3, 4, 4, 8, 10]
key = 4
sol = Solution()
print(sol.getNextGreaterElement(arr, key))
# tests-end

'''output
8
'''
