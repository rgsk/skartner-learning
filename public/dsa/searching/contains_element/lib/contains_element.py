from bisect import bisect_left
from typing import List


class Solution:
    def containsElement(self, arr: List[int], key: int) -> bool:
        index = bisect_left(arr, key)
        return index < len(arr) and arr[index] == key


# tests-start
arr = [1, 2, 3, 3, 3, 4, 4, 5]
key = 2
sol = Solution()
print(sol.containsElement(arr, key))
# tests-end

'''output
True
'''
