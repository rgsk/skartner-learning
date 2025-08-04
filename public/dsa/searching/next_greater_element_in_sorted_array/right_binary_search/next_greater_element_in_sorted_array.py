from math import ceil
from typing import List


def right_binary_search(nums: List[int], target: int) -> int:
    left = -1
    right = len(nums) - 1
    while left < right:
        mid = ceil((left + right) / 2)
        if nums[mid] > target:
            right = mid - 1
        else:
            left = mid
    return left + 1


class Solution:
    def getNextGreaterElement(self, arr: List[int], key: int) -> int:
        r = right_binary_search(arr, key)
        if r == len(arr):
            return key
        return arr[r]


# tests-start
arr = [1, 2, 3, 3, 4, 4, 8, 10]
key = 4
sol = Solution()
print(sol.getNextGreaterElement(arr, key))
# tests-end

'''output
8
'''
