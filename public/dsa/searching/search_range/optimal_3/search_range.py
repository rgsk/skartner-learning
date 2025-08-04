from math import ceil
from typing import List


def left_binary_search(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left if nums[left] == target else -1


def right_binary_search(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    while left < right:
        mid = ceil((left + right) / 2)
        if nums[mid] > target:
            right = mid - 1
        else:
            left = mid
    return left if nums[left] == target else -1


class Solution:
    def searchRange(self, arr: List[int], key: int) -> List[int]:
        l = left_binary_search(arr, key)
        if l == -1:
            return [-1, -1]
        r = right_binary_search(arr, key)
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
