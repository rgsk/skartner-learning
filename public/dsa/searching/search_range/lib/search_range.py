from bisect import bisect_left, bisect_right
from typing import List


class Solution:
    def searchRange(self, arr: List[int], key: int) -> List[int]:
        index = bisect_left(arr, key)
        l = index if index < len(arr) and arr[index] == key else -1
        if l == -1:
            return [-1, -1]
        r = bisect_right(arr, key) - 1
        return [l, r]


# tests-start
arr = [1, 2, 3, 3, 3, 4, 4, 5]
key = 3
sol = Solution()
print(sol.searchRange(arr, key))
# tests-end

'''output
[2, 4]
'''
